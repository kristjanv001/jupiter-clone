# Jupiter Clone

![](https://res.cloudinary.com/du1qfmeoz/image/upload/v1677486000/Various/jupiter-desktop_vz1rsd.png)

## ℹ️ Description

This is a replica of the slider component from the home page of the [Jupiter](https://jupiter.err.ee) web-app, showcasing the slider's functionality.

## 🥞 The Tech Stack

- Angular
- Swiperjs

## 📑 To Do

- Refactor slider component: Add AppSliders that holds the individual slider components
- Slider: Remove right / left gutter if not the end / beginning
  - Modify how slides are shown on the left first
  - Re-structure container-wrapper relationship: e.g., remove container horizontal margins and add to heading only
- Wait for initial data to be loaded before showing the layout?
- Load content on scroll
- Apply Smart crop to images
- Create a TypeScript interface for data? Is it worth it?
- Remove "any" types
- Custom lazy loading placeholder
- Background gradient overlay

## 📺 Demo

https://awesomejupiter.vercel.app
