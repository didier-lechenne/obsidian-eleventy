---
layout: base.njk
title: Accueil
description: Bienvenue sur mon site généré avec Eleventy et syntaxe Obsidian
---

# Bienvenue sur mon site super économe



Ce site est généré avec **Eleventy** tout en conservant la syntaxe **Obsidian** que vous connaissez et aimez !

> <big>« Quel que soit le code hacké, quelle que soit sa forme, langage programmatique ou poétique, mathématique ou musical, nous créons la possibilité de mettre au monde des formes nouvelles. Pas toujours de grandes choses, pas même de bonnes choses, mais de nouvelles choses. »</big>    
— McKenzie Wark, A Hacker Manifesto


mon-projet/
├── _eleventy/                    # 🔧 Mécanique du site
│   ├── config/
│   │   ├── markdown.js
│   │   ├── collections.js
│   │   ├── filters.js
│   │   └── transforms.js
│   ├── layouts/
│   │   ├── base.njk
│   │   ├── blog.njk
│   │   └── page.njk
│   ├── includes/
│   │   ├── head.njk
│   │   ├── header.njk
│   │   └── footer.njk
│   ├── assets/
│   │   ├── css/
│   │   ├── js/
│   │   └── images/
│   └── data/
│       └── site.json
├── content/                      # 📝 Contenu uniquement
│   └── text/
│       ├── index.md
│       ├── about.md
│       ├── blog/
│       │   ├── blog.md
│       │   └── mon-article.md
│       └── pages/
│           └── contact.md
├── .eleventy.js                  # Configuration principale
├── package.json
└── README.md