async function sendMessage() {
  const input = document.getElementById("userInput").value;
  const res = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer YOUR_API_KEY_HERE"
    },
    body: JSON.stringify({
      model: "gpt-4.1",
      messages: [
        { role: "system", content: "You are the ZOLL AED Plus AI marketing agent." },
        { role: "user", content: input }
      ]
    })
  });
  const data = await res.json();
  const reply = data.choices[0].message.content;
  document.getElementById("chatbox").innerHTML += `<p>${reply}</p>`;
}
