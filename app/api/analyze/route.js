export async function POST(req) {
  try {
    const { idea } = await req.json();

    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.OPENROUTER_API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "openai/gpt-3.5-turbo",
        messages: [
          {
            role: "user",
            content: `
              You are a startup analyst.

              Analyze the following startup idea in a DETAILED and PROFESSIONAL manner.

              IMPORTANT:
              - Give at least 4-6 points for pros and cons
              - Each point should be 1-2 lines (not single words)
              - Be specific, not generic
              - Target audience should be clearly explained
              - Improvements should be practical
              - Monetization should include multiple strategies

              Return ONLY valid JSON in this format:

              {
                "pros": [],
                "cons": [],
                "target_audience": "",
                "improvements": [],
                "monetization": []
              }

              Startup Idea: ${idea}
            `
          }
        ]
      })
    });

    const data = await response.json();

    // 🔥 DEBUG (VERY IMPORTANT)
    console.log("API RESPONSE:", data);

    // ❌ agar error aaya
    if (!data.choices) {
      return Response.json({
        error: data.error?.message || "Something went wrong with API"
      });
    }

    let resultText = data.choices[0].message.content;

    // 🧠 try parsing JSON safely
    let parsed;
    try {
      parsed = JSON.parse(resultText);
    } catch (e) {
      parsed = { raw: resultText };
    }

    return Response.json(parsed);

  } catch (error) {
    return Response.json({
      error: error.message
    });
  }
}