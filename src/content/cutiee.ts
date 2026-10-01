export interface CutieeContent {
  name: string;
  nickname: string;
  photos: Array<{
    id: number;
    url: string;
    caption: string;
    memory: string;
    mood: string;
    alt: string;
  }>;
  videos: Array<{ id: number; url: string; caption: string }>;
  memories: Array<{ id: number; text: string }>;
  songs: Array<{ id: number; url: string; title: string }>;
  insideJokes: string[];
  littleThings: string[];
  gifts: Array<{ id: number; title: string; type: string; photoId: number }>;
  finalMessage: string;
}

export const cutieeContent: CutieeContent = {
  name: "Atuba",
  nickname: "Jaanuuu",
  
  photos: [
    { id: 1, url: "/photos/IMG_20260930_231250_603.jpg.jpeg", caption: "Bas ek pyaari si jhalak.", memory: "Ek apna sa ehsaas.", mood: "Narm", alt: "Personal photo 1, poori tasveer ke saath" },
    { id: 2, url: "/photos/IMG_20260930_231259_103.jpg.jpeg", caption: "Dil ke kareeb ek tasveer.", memory: "Ek khaas si jhalak.", mood: "Sukoon", alt: "Personal photo 2, poori tasveer ke saath" },
    { id: 3, url: "/photos/IMG_20260930_231301_369.jpg.jpeg", caption: "Apni si ek tasveer.", memory: "Ek narm si yaad.", mood: "Naram roshni", alt: "Personal photo 3, poori tasveer ke saath" },
    { id: 4, url: "/photos/IMG_20260930_231305_489.jpg.jpeg", caption: "Ek pal, bas apna sa.", memory: "Dil ke kareeb ek pal.", mood: "Gulabi", alt: "Personal photo 4, poori tasveer ke saath" },
    { id: 5, url: "/photos/IMG_20260930_231306_635.jpg.jpeg", caption: "Tasveer mein ek pyaara ehsaas.", memory: "Ek pyaari si jhalak.", mood: "Sukoon", alt: "Personal photo 5, poori tasveer ke saath" },
    { id: 6, url: "/photos/IMG_20260930_231311_020.jpg.jpeg", caption: "Yeh pal, dil ke paas.", memory: "Apna sa ek ehsaas.", mood: "Narm", alt: "Personal photo 6, poori tasveer ke saath" },
    { id: 7, url: "/photos/IMG_20260930_231340_268.jpg.jpeg", caption: "Ek khoobsurat si jhalak.", memory: "Ek pal jo apna sa lage.", mood: "Sukoon", alt: "Personal photo 7, poori tasveer ke saath" },
    { id: 8, url: "/photos/IMG_20260930_231354_085.jpg.jpeg", caption: "Khamoshi mein ek pyaara pal.", memory: "Ek narm sa ehsaas.", mood: "Shaant", alt: "Personal photo 8, poori tasveer ke saath" },
    { id: 9, url: "/photos/IMG_20260930_231405_885.jpg.jpeg", caption: "Apnepan ki ek chhoti si jhalak.", memory: "Ek pyaara sa pal.", mood: "Sukoon", alt: "Personal photo 9, poori tasveer ke saath" },
    { id: 10, url: "/photos/IMG_20260930_231412_684.jpg.jpeg", caption: "Yeh tasveer, apne andaaz mein khaas.", memory: "Dil se judi ek jhalak.", mood: "Narm", alt: "Personal photo 10, poori tasveer ke saath" },
    { id: 11, url: "/photos/IMG_20260930_231414_117.jpg.jpeg", caption: "Ek pal jo dil ko pyaara lage.", memory: "Ek apni si tasveer.", mood: "Sukoon", alt: "Personal photo 11, poori tasveer ke saath" },
    { id: 12, url: "/photos/IMG_20260930_231415_935.jpg.jpeg", caption: "Bas tumhari ek jhalak.", memory: "Ek khaas sa ehsaas.", mood: "Naram roshni", alt: "Personal photo 12, poori tasveer ke saath" },
    { id: 13, url: "/photos/IMG_20260930_231420_717.jpg.jpeg", caption: "Ek pyaari si yaadgaar jhalak.", memory: "Apna sa ek pal.", mood: "Sukoon", alt: "Personal photo 13, poori tasveer ke saath" },
    { id: 14, url: "/photos/IMG_20260930_231429_733.jpg.jpeg", caption: "Dil mein reh jaane wali tasveer.", memory: "Ek narm si jhalak.", mood: "Narm", alt: "Personal photo 14, poori tasveer ke saath" },
    { id: 15, url: "/photos/IMG_20260930_231456_367.jpg.jpeg", caption: "Ek tasveer, iss kahaani ka ek hissa.", memory: "Ek apna sa lamha.", mood: "Sukoon", alt: "Personal photo 15, poori tasveer ke saath" },
    { id: 16, url: "/photos/IMG_20260930_231510_900.jpg.jpeg", caption: "Ek aur apni si jhalak.", memory: "Dil ke kareeb ek tasveer.", mood: "Narm", alt: "Personal photo 16, poori tasveer ke saath" },
    { id: 17, url: "/photos/IMG_20260930_231519_564.jpg.jpeg", caption: "Yeh pyaara sa ehsaas.", memory: "Ek khaas si tasveer.", mood: "Sukoon", alt: "Personal photo 17, poori tasveer ke saath" }
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
    { id: 1, title: "Ek yaad", type: "memory", photoId: 11 },
    { id: 2, title: "Ek ehsaas", type: "feeling", photoId: 12 },
    { id: 3, title: "Ek pyaari si baat", type: "little_thing", photoId: 13 },
    { id: 4, title: "Ek dua", type: "dua", photoId: 14 }
  ],
  
  finalMessage: `Really... I love you more than you know.
Shayad main kabhi lafzon mein woh sab keh hi na paun jo mere dil mein tumhare liye hai.
Tum meri zindagi ka sirf ek khoobsurat hissa nahi ho... tum woh ehsaas ho jiske liye main hamesha Allah ka shukr ada karta hoon.

Main chahta hoon ke chahe waqt kaisa bhi ho, main humesha tumhare saath khada rahun.
Khushi mein bhi, aur mushkil waqt mein bhi.
Tumhari izzat, tumhari khushi aur tumhara sukoon mere liye sabse zyada important hai.

Aur agar meri koi dua tumhare liye ho, toh bas itni...
Allah tumhe hamesha khush rakhe,
Tumhare dil ko sukoon de,
Aur tumhari zindagi ko un saari khoobsurat cheezon se bhar de jinki tum sach mein haqdar ho.

I love you... more than you know, more than I can explain, and probably more than these little words will ever hold. ❤️

Bas itna yaad rakhna... tum mere liye bohot, bohot special ho.
Aur jab tak meri duaon mein tumhara zikr rahega, tum mere dil ke ek khoobsurat kone mein hamesha rahogi.`
};
