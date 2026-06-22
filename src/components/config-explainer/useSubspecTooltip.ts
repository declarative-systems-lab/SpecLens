import { useEffect, useRef } from 'react';

export function useSubspecTooltip(containerRef: React.RefObject<HTMLElement | null>) {
  const tooltipRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let tooltip = tooltipRef.current;
    if (!tooltip) {
      tooltip = document.createElement('div');
      tooltip.className = 'tooltip';
      document.body.appendChild(tooltip);
      tooltipRef.current = tooltip;
    }

    const hideTooltip = () => {
      tooltip!.classList.remove('show');
      tooltip!.style.display = 'none';
      tooltip!.style.visibility = 'hidden';
      tooltip!.style.opacity = '0';
    };

    const positionTooltip = (field: HTMLElement) => {
      const subspec = field.getAttribute('data-subspec');
      if (!subspec) return;

      hideTooltip();
      tooltip!.innerHTML = subspec;
      tooltip!.style.display = 'block';

      requestAnimationFrame(() => {
        const fieldRect = field.getBoundingClientRect();
        const tooltipHeight = tooltip!.offsetHeight;
        const tooltipWidth = tooltip!.offsetWidth;

        let left = fieldRect.left + fieldRect.width / 2 - tooltipWidth / 2;
        let top = fieldRect.top - tooltipHeight - 20;
        const arrowLeft = fieldRect.left + fieldRect.width / 2;
        let arrowPosition: 'top' | 'bottom' = 'bottom';

        if (left < 10) left = 10;
        else if (left + tooltipWidth > window.innerWidth - 10) {
          left = window.innerWidth - tooltipWidth - 10;
        }

        if (top < 10) {
          top = fieldRect.bottom + 20;
          arrowPosition = 'top';
        }

        if (arrowPosition === 'top') {
          tooltip!.style.setProperty('--arrow-top', '-12px');
          tooltip!.style.setProperty(
            '--arrow-border',
            'transparent transparent #9e9e9e transparent',
          );
        } else {
          tooltip!.style.setProperty('--arrow-top', '100%');
          tooltip!.style.setProperty('--arrow-border', '#9e9e9e transparent transparent transparent');
        }

        const arrowOffset = arrowLeft - left;
        const minArrowPos = 20;
        const maxArrowPos = tooltipWidth - 20;
        tooltip!.style.setProperty(
          '--arrow-left',
          `${Math.max(minArrowPos, Math.min(maxArrowPos, arrowOffset))}px`,
        );

        tooltip!.style.left = `${left}px`;
        tooltip!.style.top = `${top}px`;
        tooltip!.style.visibility = 'visible';
        tooltip!.style.opacity = '1';
        tooltip!.classList.add('show');
      });
    };

    const showField = (field: HTMLElement) => {
      document.querySelectorAll('.config-field-showing-tooltip').forEach((f) => {
        f.classList.remove('config-field-showing-tooltip');
      });
      field.classList.add('config-field-showing-tooltip');
      field.setAttribute('tabindex', '0');
      field.focus({ preventScroll: true });
      positionTooltip(field);
    };

    const getFields = () =>
      Array.from(container.querySelectorAll('.config-field')) as HTMLElement[];

    const onMouseOver = (e: MouseEvent) => {
      const field = (e.target as HTMLElement).closest('.config-field') as HTMLElement | null;
      if (!field || !container.contains(field)) return;
      showField(field);
    };

    const onMouseOut = (e: MouseEvent) => {
      const field = (e.target as HTMLElement).closest('.config-field') as HTMLElement | null;
      if (!field || !container.contains(field)) return;

      const related = (e.relatedTarget as HTMLElement | null)?.closest('.config-field');
      if (related) return;

      field.classList.remove('config-field-showing-tooltip');
      hideTooltip();
    };

    const onClick = (e: MouseEvent) => {
      const field = (e.target as HTMLElement).closest('.config-field') as HTMLElement | null;
      if (!field || !container.contains(field)) return;

      e.preventDefault();
      const subspec = field.getAttribute('data-subspec');
      if (!subspec) return;

      const temp = document.createElement('div');
      temp.innerHTML = subspec;
      const translated = temp.querySelector('.tooltip-translated');
      const text = (translated?.textContent ?? temp.textContent ?? '').trim();
      if (!text) return;

      navigator.clipboard?.writeText(text).catch(() => {
        /* ignore */
      });
    };

    const onKeyDown = (e: KeyboardEvent) => {
      const fields = getFields();
      if (fields.length === 0) return;

      const active = document.activeElement?.closest('.config-field') as HTMLElement | null;
      const currentIndex = active ? fields.indexOf(active) : -1;

      if (e.key === 'Tab' && container.contains(document.activeElement)) {
        e.preventDefault();
        const next = e.shiftKey
          ? fields[(currentIndex <= 0 ? fields.length : currentIndex) - 1]
          : fields[(currentIndex + 1) % fields.length];
        showField(next);
        return;
      }

      if (!['ArrowDown', 'ArrowUp', 'ArrowLeft', 'ArrowRight'].includes(e.key)) return;
      if (!container.contains(document.activeElement)) return;

      e.preventDefault();
      const delta = e.key === 'ArrowDown' || e.key === 'ArrowRight' ? 1 : -1;
      const nextIndex =
        currentIndex === -1
          ? delta > 0
            ? 0
            : fields.length - 1
          : (currentIndex + delta + fields.length) % fields.length;
      showField(fields[nextIndex]);
    };

    getFields().forEach((field) => field.setAttribute('tabindex', '0'));

    container.addEventListener('mouseover', onMouseOver);
    container.addEventListener('mouseout', onMouseOut);
    container.addEventListener('click', onClick);
    container.addEventListener('keydown', onKeyDown);

    return () => {
      container.removeEventListener('mouseover', onMouseOver);
      container.removeEventListener('mouseout', onMouseOut);
      container.removeEventListener('click', onClick);
      container.removeEventListener('keydown', onKeyDown);
      hideTooltip();
      tooltip?.remove();
      tooltipRef.current = null;
    };
  }, [containerRef]);
}
