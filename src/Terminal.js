import { useState, useRef, useEffect, useCallback } from 'react';
import './Terminal.css';
import {
  AboutOutput,
  SkillsOutput,
  ExperienceOutput,
  ProjectsOutput,
  LinksOutput,
  GalleryOutput,
  HelpOutput,
  ThemeOutput,
  ErrorOutput,
} from './Output';

const PROMPT = 'C:\\portfolio>';

const SPLASH = (
  <div className="cmd-dim">
    Microsoft Windows [Version 10.0.26200]
    <br />
    (c) Daniel Tsang. All rights reserved.
    <br />
    <br />
    Type <span className="cmd-yellow">help</span> for available commands.
  </div>
);

const TRAY_BUTTONS = [
  { label: 'about',      cmd: 'about' },
  { label: 'skills',     cmd: 'skills' },
  { label: 'experience', cmd: 'experience' },
  { label: 'projects',   cmd: 'projects' },
  { label: 'links',      cmd: 'links' },
  { label: 'gallery',    cmd: 'gallery' },
  { label: 'clear',      cmd: 'clear' },
  { label: 'default',    cmd: 'default' },
  { label: 'hacker',     cmd: 'hacker' },
  { label: 'retro',      cmd: 'retro' },
];

function getOutput(command) {
  switch (command.trim().toLowerCase()) {
    case 'about':
    case 'a':          return { output: <AboutOutput /> };
    case 'skills':
    case 's':          return { output: <SkillsOutput /> };
    case 'experience':
    case 'e':          return { output: <ExperienceOutput /> };
    case 'projects':
    case 'p':          return { output: <ProjectsOutput /> };
    case 'links':
    case 'l':          return { output: <LinksOutput /> };
    case 'gallery':
    case 'g':          return { output: <GalleryOutput /> };
    case 'help':
    case 'h':          return { output: <HelpOutput /> };
    case 'clear':
    case 'c':          return { clear: true };
    case 'default':
    case 'hacker':
    case 'retro':      return { theme: command.trim().toLowerCase(), output: <ThemeOutput theme={command.trim().toLowerCase()} /> };
    default:           return { output: <ErrorOutput command={command.trim()} /> };
  }
}

export default function Terminal() {
  const [value, setValue] = useState('');
  const [theme, setTheme] = useState('default');
  const [trayOpen, setTrayOpen] = useState(false);
  const [history, setHistory] = useState([{ cmd: null, output: SPLASH }]);
  const cmdHistory = useRef([]);
  const historyIndex = useRef(-1);
  const historyDraft = useRef('');

  const inputRef = useRef(null);
  const mirrorRef = useRef(null);
  const cursorRef = useRef(null);
  const bottomRef = useRef(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleClick = useCallback(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    if (!mirrorRef.current || !cursorRef.current) return;
    const mirrorWidth = mirrorRef.current.getBoundingClientRect().width;
    cursorRef.current.style.left = mirrorWidth + 'px';
  }, [value]);

  const runCommand = useCallback((cmd) => {
    if (!cmd) return;
    if (cmdHistory.current[cmdHistory.current.length - 1] !== cmd) {
      cmdHistory.current.push(cmd);
    }
    historyIndex.current = -1;
    historyDraft.current = '';
    setValue('');
    const result = getOutput(cmd);
    if (result.clear) {
      setHistory([]);
    } else {
      if (result.theme) setTheme(result.theme);
      setHistory((prev) => [...prev, { cmd, output: result.output }]);
    }
    inputRef.current?.focus();
  }, []);

  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === 'ArrowUp') {
        e.preventDefault();
        if (cmdHistory.current.length === 0) return;
        if (historyIndex.current === -1) historyDraft.current = value;
        const next = Math.min(historyIndex.current + 1, cmdHistory.current.length - 1);
        historyIndex.current = next;
        setValue(cmdHistory.current[cmdHistory.current.length - 1 - next]);
        return;
      }

      if (e.key === 'ArrowDown') {
        e.preventDefault();
        if (historyIndex.current === -1) return;
        const next = historyIndex.current - 1;
        historyIndex.current = next;
        setValue(next === -1 ? historyDraft.current : cmdHistory.current[cmdHistory.current.length - 1 - next]);
        return;
      }

      if (e.key === 'Enter') {
        const cmd = value.trim();
        historyIndex.current = -1;
        historyDraft.current = '';
        setValue('');
        if (cmd === '') return;
        runCommand(cmd);
      }
    },
    [value, runCommand]
  );

  return (
    <div className={`terminal theme-${theme}`} onClick={handleClick}>
      <div className="terminal-titlebar">
        Command Prompt — Daniel Tsang's Portfolio
      </div>

      {/* <pre className="terminal-banner">{`\
 ___   _   _  _ ___ ___ _
|   \\ /_\\ | \\| |_ _| __| |
| |) / _ \\| .\` || || _|| |__
|___/_/ \\_\\_|\\_ |___|___|____|
 _____  ___   _   _  _  ___
|_   _|/ __| /_\\ | \\| |/ __|
  | |  \\__ \\/ _ \\| .\` | (_ |
  |_|  |___/_/ \\_\\_|\\_ |\\___| `}</pre> */}

      <div className="terminal-output">
        {history.map((entry, i) => (
          <div key={i} className="history-entry">
            {entry.cmd && (
              <div className="history-prompt">
                {PROMPT} {entry.cmd}
              </div>
            )}
            <div style={{ marginBottom: 16 }}>{entry.output}</div>
          </div>
        ))}
        <div ref={bottomRef} />
      </div>

      {/* Input line */}
      <div className="terminal-input-row">
        <span className="prompt-label">{PROMPT}</span>
        <span>&nbsp;</span>
        <div className="cursor-wrapper">
          <span
            ref={mirrorRef}
            style={{
              position: 'absolute',
              visibility: 'hidden',
              whiteSpace: 'pre',
              fontFamily: 'inherit',
              fontSize: 'inherit',
              pointerEvents: 'none',
            }}
          >
            {value || ''}
          </span>
          <input
            ref={inputRef}
            className="terminal-input"
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onKeyDown={handleKeyDown}
            autoComplete="off"
            autoCorrect="off"
            autoCapitalize="off"
            spellCheck={false}
            aria-label="Terminal input"
          />
          <span ref={cursorRef} className="cursor-block" />
        </div>
      </div>

      {/* Collapsible command tray */}
      <div className="tray" onClick={(e) => e.stopPropagation()}>
        <button
          className="tray-toggle"
          onClick={() => setTrayOpen((o) => !o)}
          aria-label={trayOpen ? 'Collapse command tray' : 'Expand command tray'}
        >
          <span className="tray-toggle-arrow">{trayOpen ? '▼' : '▲'}</span>
          <span className="tray-toggle-label">commands</span>
        </button>

        {trayOpen && (
          <div className="tray-buttons">
            {TRAY_BUTTONS.map(({ label, cmd }) => (
              <button
                key={cmd}
                className="tray-btn"
                onClick={() => runCommand(cmd)}
              >
                {label}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
