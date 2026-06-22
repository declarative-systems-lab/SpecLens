const DEFAULT_PANEL = 'why';

function panelFromHash(): string {
  const id = window.location.hash.replace(/^#/, '');
  const panel = document.querySelector<HTMLElement>(`.home-panel[data-panel="${id}"]`);
  return panel ? id : DEFAULT_PANEL;
}

function setActivePanel(panelId: string, pushHash = true): void {
  document.querySelectorAll<HTMLElement>('.home-panel').forEach((el) => {
    el.classList.toggle('is-active', el.dataset.panel === panelId);
  });

  document.querySelectorAll<HTMLElement>('[data-nav-panel]').forEach((el) => {
    const isActive = el.dataset.navPanel === panelId;
    el.classList.toggle('nav-link--active', isActive);
    if (el.tagName === 'A' && isActive) {
      el.setAttribute('aria-current', 'page');
    } else if (el.tagName === 'A') {
      el.removeAttribute('aria-current');
    }
  });

  if (pushHash && window.location.hash !== `#${panelId}`) {
    history.replaceState(null, '', `#${panelId}`);
  }
}

export function initHomePanels(): void {
  const viewport = document.querySelector('.home-viewport');
  if (!viewport) return;

  setActivePanel(panelFromHash(), false);

  document.addEventListener('click', (e) => {
    const link = (e.target as HTMLElement).closest<HTMLAnchorElement>('[data-nav-panel]');
    if (!link || link.tagName !== 'A') return;
    const panel = link.dataset.navPanel;
    if (!panel) return;
    e.preventDefault();
    setActivePanel(panel);
  });

  window.addEventListener('hashchange', () => {
    setActivePanel(panelFromHash(), false);
  });
}
