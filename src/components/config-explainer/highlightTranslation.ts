/** Port of highlight_translation_text() from userstudy generate_test_html.py */
export function highlightTranslationText(text: string): string {
  if (!text) return text;

  let highlighted = text;

  highlighted = highlighted.replace(
    /\b(permit|deny)\b/gi,
    '<span style="color: #ff8800; font-weight: 900;">$1</span>',
  );
  highlighted = highlighted.replace(
    /(\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}(?:\/\d{1,2})?)/g,
    '<span style="color: #0080ff; font-weight: 900;">$1</span>',
  );
  highlighted = highlighted.replace(
    /(\d+:\d+)/g,
    '<span style="color: #0080ff; font-weight: 900;">$1</span>',
  );
  highlighted = highlighted.replace(
    /(\d+)[~-](\d+)/g,
    '<span style="color: #16a34a; font-weight: 900;">$1~$2</span>',
  );
  highlighted = highlighted.replace(
    /(AS-path\s+前置扩展，长度应为\s+)(\d+)/g,
    '$1<span style="color: #16a34a; font-weight: 900;">$2</span>',
  );
  highlighted = highlighted.replace(
    /(AS-path\s+prepend\s+length\s*=\s*)(\d+)/gi,
    '$1<span style="color: #16a34a; font-weight: 900;">$2</span>',
  );
  highlighted = highlighted.replace(
    /\b(none)\b/gi,
    '<span style="color: #ff8800; font-weight: 900;">$1</span>',
  );

  highlighted = highlighted.replace(
    /Community\s+domain:\s*\{[^}]+\}|Community\s+可选范围：\s*\{[^}]+\}/gi,
    (fullText) => {
      const stripped = fullText.replace(
        /<span style="color: #0080ff; font-weight: 900;">(\d+:\d+)<\/span>/g,
        '$1',
      );
      return `<em>${stripped}</em>`;
    },
  );

  if (/<span\s+style\s*=\s*["']color:\s*red\s*;?\s*["']/i.test(highlighted)) {
    const redSpanPattern = /<span\s+style\s*=\s*["']color:\s*red\s*;?\s*["']>/gi;
    const matches = [...highlighted.matchAll(redSpanPattern)];

    for (let i = matches.length - 1; i >= 0; i -= 1) {
      const match = matches[i];
      const redSpanStart = match.index ?? 0;
      const redSpanEnd = redSpanStart + match[0].length;
      const afterRedSpan = highlighted.slice(redSpanEnd);

      const emMatch = afterRedSpan.match(/<em>/i);
      const emPos = emMatch?.index ?? null;

      const gteMatch1 = afterRedSpan.match(/&gt;=/);
      const gteMatch2 = afterRedSpan.match(/>=/);
      let gtePos: number | null = null;
      if (gteMatch1 && gteMatch2) gtePos = Math.min(gteMatch1.index ?? 0, gteMatch2.index ?? 0);
      else if (gteMatch1) gtePos = gteMatch1.index ?? null;
      else if (gteMatch2) gtePos = gteMatch2.index ?? null;

      let targetPos: number | null = null;
      let targetText = '';
      if (emPos !== null && gtePos !== null) {
        if (emPos < gtePos) {
          targetPos = emPos;
          targetText = '<em>';
        } else {
          targetPos = gtePos;
          targetText =
            gteMatch1 && gteMatch1.index === gtePos ? gteMatch1[0] : (gteMatch2?.[0] ?? '');
        }
      } else if (emPos !== null) {
        targetPos = emPos;
        targetText = '<em>';
      } else if (gtePos !== null) {
        targetPos = gtePos;
        targetText =
          gteMatch1 && gteMatch1.index === gtePos ? gteMatch1[0] : (gteMatch2?.[0] ?? '');
      }

      if (targetPos !== null) {
        const prefix = highlighted.slice(redSpanStart, redSpanEnd + targetPos);
        const redPrefix = prefix
          .replace(/color:\s*#ff8800/g, 'color: red')
          .replace(/color:\s*#0080ff/g, 'color: red')
          .replace(/color:\s*#16a34a/g, 'color: red');
        highlighted =
          highlighted.slice(0, redSpanStart) +
          redPrefix +
          targetText +
          highlighted.slice(redSpanEnd + targetPos + targetText.length);
      }
    }
  }

  highlighted = highlighted.replace(/<em>(.*?)<\/em>/gis, (_match, content: string) => {
    let cleaned = content;
    while (/<span\s+style\s*=[^>]*>/.test(cleaned)) {
      cleaned = cleaned.replace(/<span\s+style\s*=[^>]*>([^<]*)<\/span>/g, '$1');
    }
    return `<em>${cleaned}</em>`;
  });

  return highlighted;
}
