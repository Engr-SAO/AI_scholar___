// services/openai.js
export async function fetchOpenAIResponse(prompt) {
    const response = await fetch('https://api.openai.com/v1/completions', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.NEXT_PUBLIC_OPENAI_API_KEY}`, 
    }, 
    body: JSON.stringify({
    model: 'text-davinci-003', // Replace with the latest model
    prompt: prompt,
    max_tokens: 150,
    }),
    });
    const data = await response.json();
    return data.choices[0].text.trim();
    } 

    // services/openai.js
/*export async function fetchOpenAIResponse(query) {
    const prompt = `You are a highly intelligent FAQ bot. Answer the following question based on the knowledge from our support database and external sources:
    Question: ${query}`;
    const response = await fetch('https://api.openai.com/v1/completions', {
    method: 'POST',
    headers: {
    'Content-Type': 'application/json',
    'Authorization':`Bearer ${process.env.NEXT_PUBLIC_OPENAI_API_KEY}`,
    },
    body: JSON.stringify({
    model: 'text-davinci-003', // Replace with the latest model
    prompt: prompt,
    max_tokens: 150,
    }),
    });
    const data = await response.json();
    return data.choices[0].text.trim();
    }*/