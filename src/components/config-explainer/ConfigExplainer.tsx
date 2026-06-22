import { useMemo, useRef, useState } from 'react';
import { question2Example } from './question2Data';
import { useSubspecTooltip } from './useSubspecTooltip';
import { buildSubspecMaps, parseConfigWithSubspecs } from './userstudyRender';
import './config-explainer.css';

export default function ConfigExplainer() {
  const [activeIndex, setActiveIndex] = useState(0);
  const configRef = useRef<HTMLDivElement>(null);
  useSubspecTooltip(configRef);

  const subspecMaps = useMemo(
    () =>
      buildSubspecMaps(
        question2Example.fieldSubspecs,
        question2Example.lineSubspecs,
        question2Example.fieldSubspecsTrans,
        question2Example.lineSubspecsTrans,
        false,
      ),
    [],
  );

  const activeRouter = question2Example.routers[activeIndex];

  const configLines = useMemo(
    () => parseConfigWithSubspecs(activeRouter.configContent, subspecMaps, 'en'),
    [activeRouter.configContent, subspecMaps],
  );

  return (
    <div className="explainer-grid">
      <div className="explainer-sidebar">
        <div className="explainer-property">
          <p className="explainer-property__label">Network-wide property</p>
          <div
            className="explainer-property__text specification-content"
            dangerouslySetInnerHTML={{ __html: question2Example.specificationHtml }}
          />
        </div>

        <div className="explainer-topology">
          <img
            src={question2Example.topologyImage}
            alt="Network topology for the example configuration"
            className="explainer-topology__image"
          />
        </div>
      </div>

      <div className="explainer-main">
        <div className="explainer-toolbar">
          <div className="explainer-router-tabs" role="tablist" aria-label="Router configurations">
            {question2Example.routers.map((router, index) => (
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
          <span className="explainer-toolbar__hint">
            Hover a highlighted field to inspect its localized subspecification. Click to copy the
            explanation.
          </span>
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
