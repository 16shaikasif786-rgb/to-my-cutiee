export interface CutieeContent {
  name: string;
  nickname: string;
  photos: Array<{ id: number; url: string; caption: string }>;
  videos: Array<{ id: number; url: string; caption: string }>;
  memories: Array<{ id: number; text: string }>;
  songs: Array<{ id: number; url: string; title: string }>;
  insideJokes: string[];
  littleThings: string[];
  gifts: Array<{ id: number; title: string; type: string }>;
  finalMessage: string;
}

export const cutieeContent: CutieeContent = {
  name: "Atuba",
  nickname: "Jaanuuu",
  
  photos: [
    { id: 1, url: "/photos/first-call.jpg", caption: "Woh feeling hi alag thi 🥹🫶🏻" }
  ],
  
  videos: [],
  
  memories: [
    { id: 1, text: "Jis din aapne first time meku call kiya tha, woh feeling hi alag thi 🥹🫶🏻" },
    { id: 2, text: "Jab aapne mujhe propose kiya tha na, woh moment toh meku abhi tak yaad hai... ❤️🩹" },
    { id: 3, text: "Aapse baat karte waqt ek alag hi happiness feel hoti jii 🥺❤️" },
    { id: 4, text: "Aapke saath jo comfort feel hota, woh mere liye sabse special hai 🫶🏻✨" }
  ],
  
  songs: [],
  
  insideJokes: [],
  
  littleThings: [
    "Aapki woh pyaari si eyes.",
    "Aapki woh cute smile...",
    "Aapka ek msg jo pura mood change kardeta.",
    "Aapke saath baat karke aane wali happiness.",
    "Aapke saath milne wala comfort."
  ],
  
  gifts: [
    { id: 1, title: "One Memory", type: "memory" },
    { id: 2, title: "One Feeling", type: "feeling" },
    { id: 3, title: "One Little Thing", type: "little_thing" },
    { id: 4, title: "One Dua", type: "dua" }
  ],
  
  finalMessage: "Jaanuuu, aapke saath na bohot saare special moments hain jo meku kabhi nai bhoolte 🥺❤️\n\nAllah tumhara dil hamesha khush rakhe,\ntumhari muskurahat mehfooz rakhe,\naur tumhari zindagi ko khoobsurat khushiyon se bhar de.\n\nAlhamdulillah for you, Shehzadi."
};
