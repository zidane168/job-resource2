// pages/api/chatgpt.js

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  const { text } = req.body;

  const prompt = `Dùng tiếng anh để tóm tắt lại đoạn văn này với văn phong ngắn ngọn, cuốn hút, trình bày dạng gạch đầu dòng, kèm theo các unicode character icon dí dỏm và cuốn hút cho người đọc:\n\n${text}`

  try {

    const OPENAI_API_KEY="sk-proj-xxxxx-7ZN9AtPPRb66heBRZANQ1dotcNyPT3BlbkFJ93f-yyyy"
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo", // hoặc "gpt-3.5-turbo"
        messages: [
          { role: "system", content: "You are a headhunt assistant." },
          { role: "user", content: prompt }
        ],
        temperature: 0.7,
      }),
    });

    const data = await response.json(); 

    console.log ('----------------')
    console.log (data)
    console.log ('----------------')

    return res.status(200).json({ result: data.choices[0].message.content.trim() });
    
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Failed to call OpenAI API" });
  }
}