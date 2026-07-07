import { useMemo, useRef, useState } from 'react';
import { question3Example } from './question3Data';
import { useSubspecTooltip } from './useSubspecTooltip';
import { buildSubspecMaps, parseConfigWithSubspecs } from './userstudyRender';
import { useLocale } from '../i18n/LanguageSwitcher';
import { getMessage } from '../../i18n';
import './config-explainer.css';

export default function ConfigExplainer() {
  const [activeIndex, setActiveIndex] = useState(0);
  const configRef = useRef<HTMLDivElement>(null);
  const locale = useLocale();
  useSubspecTooltip(configRef);

  const subspecMaps = useMemo(
    () =>
      buildSubspecMaps(
        question3Example.fieldSubspecs,
        question3Example.lineSubspecs,
        question3Example.fieldSubspecsTrans,
        question3Example.lineSubspecsTrans,
      ),
    [],
  );

  const activeRouter = question3Example.routers[activeIndex];

  const configLines = useMemo(
    () => parseConfigWithSubspecs(activeRouter.configContent, subspecMaps, locale),
    [activeRouter.configContent, subspecMaps, locale],
  );

  const propertyLabel = getMessage(locale, 'demo.propertyLabel');
  const toolbarHint = getMessage(locale, 'demo.hint');

  return (
    <div className="explainer-grid">
      <div className="explainer-sidebar">
        <div className="explainer-property">
          <p className="explainer-property__label">{propertyLabel}</p>
          <div
            className="explainer-property__text specification-content"
            dangerouslySetInnerHTML={{ __html: question3Example.specificationHtml }}
          />
        </div>

        <div className="explainer-topology">
          <img
            src={question3Example.topologyImage}
            alt="Network topology for the example configuration"
            className="explainer-topology__image"
          />
        </div>
      </div>

      <div className="explainer-main">
        <div className="explainer-toolbar">
          <div className="explainer-router-tabs" role="tablist" aria-label="Router configurations">
            {question3Example.routers.map((router, index) => (
              <button
                key={router.router}
                type="button"
                role="tab"
                className={`explainer-router-tab${index === activeIndex ? ' is-active' : ''}`}
                aria-selected={index === activeIndex}
                onClick={() => setActiveIndex(index)}
              >
                {router.router}
              </button>
            ))}
          </div>
          <span className="explainer-toolbar__hint">{toolbarHint}</span>
        </div>

        <div
          ref={configRef}
          className="config-container"
          tabIndex={0}
          aria-label={`${activeRouter.router} configuration`}
        >
          {configLines.map((lineHtml, index) => (
            <div
              key={`${activeRouter.router}-${index}`}
              className="config-line"
              dangerouslySetInnerHTML={{ __html: lineHtml }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
