
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getHydrationAdvice = async (weight?: number, activityLevel?: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Provide a quick, professional 3-sentence hydration tip for someone ${weight ? `weighing ${weight}kg` : ''} ${activityLevel ? `with ${activityLevel} activity level` : ''}. Also mention why a transparent bottle helps track water intake.`,
      config: {
        systemInstruction: "You are a health and hydration expert for Satemades Bottles. Be helpful, concise, and professional.",
      }
    });
    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Stay hydrated throughout the day for peak mental and physical performance. Using a transparent bottle helps you visually monitor your progress!";
  }
};

export const askSatemadesAI = async (message: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: message,
      config: {
        systemInstruction: "You are Satemades Bot, an AI assistant for Satemades Bottles. Our bottles are premium, transparent, borosilicate glass, BPA-free, and eco-friendly. Answer customer queries about products, shipping (free over $50), and care instructions (hand wash recommended).",
      }
    });
    return response.text;
  } catch (error) {
    return "I'm having a quick technical refresh. How can I help you with our premium bottles today?";
  }
};
