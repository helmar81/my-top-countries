---
title: 'My Top Countries'
description: 'I have visited 72 out of 195 countries so far'
pubDate: 'Feb 08 2025'
heroImage: '../../assets/quphuoc.png'
---



## 🌍 Here are my top 10:

<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
  {countryNames.map((c) => (
    <div class="rounded-2xl shadow-md p-4 text-center hover:shadow-xl transition">
      <img src={c.flag} alt={c.name} class="w-24 h-16 mx-auto object-contain mb-2" />
      <h3 class="text-lg font-semibold">{c.name}</h3>
      <p class="text-sm text-gray-600">{c.note}</p>
    </div>
  ))}
</div>

---

There are 195 countries in the world, of which 193 are UN member states while 2 are non-member observer states - the Vatican and Palestine.

Fifty-four of these countries are located in Africa, forty-eight in Asia, forty-four in Europe, thirty-three in Latin America and the Caribbean, fourteen in Oceania, and two in Northern America.  

[[Top]](#top)
