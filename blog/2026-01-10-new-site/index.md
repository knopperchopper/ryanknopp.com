---
slug: new-site
title: New Web Site
tags: [general,homelab]
---

One of my goals for 2026 is to revamp my personal web site. I have maintained some form a web site for over two decades in various styles, formats, and efforts to keep it up to date. Historically, its been positioned more as a professional resume or depiction of my portfolio in pursuit of career opportunities. I don't necessarily want to lose that aspect of it, but my goals moving forward will be a little different. 

The plan for the web site in its fifth(?) incarnation will be to now showcase more of my personal interests and hobbies. This is inline with another one of my goals heading into 2026 which is reignite my personal interest in technology. Having worked in IT for so long, like many, I found myself being bored or even jaded about technology. I think part of that is because you tend to repeat solving the same kinds of problems and learning new things is based on necessity, not curiosity. That wears on you over time and I'm hoping I can do a bit of a reset.

So, what can be expected with the new web site? My objectives are as follows:

1. Share and document my technology hobbies and personal interests
2. Keep the web site updated on a regular(ish) basis
3. Maintain my resume and professional presence
4. Have more fun 🤠

In the spirit of documenting more of what I'm working on, I can start with the web site itself. My time is limited and I don't do lots of hands-on web development these days as an Enterprise Architect. A custom-built web site was quickly ruled out. Even my last version was built on a [Jekyll](https://jekyllrb.com/) theme. For the new site, I need to have some traditional web pages, a blog capability, and a way of documenting some of my hobbies. Furthermore, I knew I wanted to create and maintain most of the content in [Markdown](https://www.markdownguide.org/). 

After a quick search, I stumbled upon [Docusaurus](https://docusaurus.io/), an open source project from Meta. Personally, I don't use any of Meta's commercial products, but I do respect their engineering and open source teams. [React](https://react.dev/) and their influence on the JavaScript ecosystem have become the de facto standard for nearly all modern web interfaces. Docusaurus provides a simple, easy-to-use, well-maintained, and highly-polished framework for building static documentation web sites. Within minutes, I can initialize a project, populate it with a directory structure and Markdown content, run a build, and deploy. You also have the opportunity to customize with React and Typescript components as necessary. For me, I've found its working quite well.

On the hosting front, I've moved from Netlify to [Cloudflare Pages](https://pages.cloudflare.com/) with a direct deploy from Github. I wasn't unhappy with Netlify, just more of a consolidation exercise since I also moved my domain and DNS there. And, I have been using the [Cloudflare Developer Platform](https://www.cloudflare.com/developer-platform/) for some other personal projects and have found it pretty nice to use.

As for content, my first area of focus will be documenting my newly created [Homelab](/homelab). It's been a lot of fun and I'm learning a lot. Documenting the build will be part of the fun and it may help others along the way. Stay tuned for more...