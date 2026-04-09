/**
 * Builds the structured prompt for startup idea analysis.
 * @param {string} idea - The startup idea text
 * @returns {{ system: string, user: string }}
 */
export function buildAnalysisPrompt(idea) {
  const system = `You are an expert startup analyst and venture strategist with 20 years of experience evaluating startup ideas across various industries. 
You have helped hundreds of founders validate their concepts before investing time and money.
Analyze startup ideas and return ONLY a valid JSON object.
No markdown, no explanation, no backticks, no preamble. Return raw JSON only.`;

  const user = `Analyze this startup idea thoroughly: "${idea}"

Return ONLY this exact JSON structure (no other text, no markdown, no explanation):
{
  "pros": [
    "Specific strength 1 relevant to this exact idea",
    "Specific strength 2",
    "Specific strength 3",
    "Specific strength 4"
  ],
  "cons": [
    "Specific risk or challenge 1",
    "Specific risk or challenge 2",
    "Specific risk or challenge 3",
    "Specific risk or challenge 4"
  ],
  "target_audience": "A detailed 2-3 sentence description of the ideal customer profile, including demographics, psychographics, current pain points they face, and why they would pay for this solution.",
  "improvements": [
    "Actionable improvement suggestion 1",
    "Actionable improvement suggestion 2",
    "Actionable improvement suggestion 3",
    "Actionable improvement suggestion 4"
  ],
  "monetization": [
    "Specific revenue model 1 with brief explanation",
    "Specific revenue model 2 with brief explanation",
    "Specific revenue model 3 with brief explanation",
    "Specific revenue model 4 with brief explanation"
  ]
}

Make every point specific, insightful, and directly relevant to this exact idea. Be direct, practical, and avoid generic advice.`;

  return { system, user };
}

/**
 * Validates the shape of the AI response.
 * @param {object} data
 * @returns {boolean}
 */
export function validateResponse(data) {
  const required = ["pros", "cons", "target_audience", "improvements", "monetization"];
  return required.every((key) => key in data);
}
