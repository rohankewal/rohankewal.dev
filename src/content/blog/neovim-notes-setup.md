---
title: Neovim Note Taking
description: How I take notes for productivity using Neovim
heroImage: /neovim-notes.png
pubDate: 01-08-2024
---

Hello, fellow developers and now welcoming all note takers as well!

Today, I'm thrilled to share my experience with Neorg, a tool that has revolutionized the way I take notes. As a staunch advocate for efficiency in workflows, I've always been on the lookout for the perfect note-taking solution. That's when I stumbled upon Neorg, a powerful note-taking plugin for Neovim. Let's dive into the nitty-gritty of Neorg, exploring its pros, cons, and how to set it up for optimal use.

## What is Neorg?
Neorg, at its core, is a tool designed to bring the power of modern note-taking to the Neovim environment. It combines the efficiency of Neovim with an organizational system reminiscent of tools like Org-mode in Emacs. It’s a solution for those who crave a keyboard-centric, highly efficient note-taking method.

## Pros of Using Neorg
**1. Seamless Integration with Neovim:** If you’re already a Neovim user, Neorg feels like a natural extension of your existing workflow. It’s all about staying in that keyboard-driven, Vim-like environment.

**2. Powerful Organization:** With Neorg, your notes aren’t just a jumble of text files. It provides a structured way to organize and manage your notes, tasks, and even project management elements.

**3. Customization:** Just like Neovim, Neorg is highly customizable. You can tweak it to fit your exact needs, whether you’re a coder, writer, or a general productivity enthusiast.

**4. Open Source:** Being open-source, Neorg has an active community of developers consistently improving it, adding features, and providing support.

## Cons of Using Neorg
**1. Learning Curve:** If you’re not familiar with Vim or Neovim, the learning curve can be steep. The Vim-style commands and modes might be intimidating for newcomers.

**2. Setup Complexity:** Getting Neorg up and running with all its features can be a bit complex, especially if you’re not used to dealing with Neovim’s configuration.

**3. Limited Visual Appeal:** For those who prefer rich GUI-based note-taking apps, Neorg’s text-based interface might seem underwhelming.

## Setting Up Neorg: The Optimal Way
**1. Prerequisites:** Ensure you have Neovim (0.5 or higher) installed. Neorg relies on the latest features of Neovim, so having the latest version is crucial.

**2. Plugin Manager:** Use a plugin manager like LazyVim, packer.nvim, or any other Neovim plugin manager. For this guide, I’ve been using LazyVim as I explained in this post some time ago.

**3. Installing Neorg:** Add Neorg to your Neovim configuration. With LazyVim, you can do this by adding:
```lua
return {
  {
    return "nvim-neorg/neorg",
    build = ":Neorg sync-parsers",
  }
}
```
You can checkout my full Neorg setup and config file on my [dotfiles](https://www.github.com/rohankewal) repo.

**4. Basic Configuration:** Configure Neorg by adding a basic setup to your Neovim configuration file. This typically involves setting up keybindings and other basic settings.

**5. Explore Modules:** Neorg comes with various modules like core.norg.dir, core.norg.completion, and more. Explore these modules and enable what you find necessary.

**6. Documentation:** Dive into the Neorg GitHub repository for detailed documentation and setup guides. It's a treasure trove of information.

## Neorg vs. Notion and Obsidian
**_Notion:_** Known for its rich GUI and versatile blocks system, Notion is a favorite for many due to its ease of use and visual appeal. It's fantastic for non-coders or those who prefer a more WYSIWYG approach. Neorg, in contrast, is more keyboard-centric and code-friendly, catering to a different user base.

**_Obsidian:_** Obsidian is closer to Neorg in terms of being Markdown-centric. It's known for its powerful linking and graph view features. While Obsidian provides a more visually intuitive interface, Neorg appeals to those who are comfortable with Vim's modal editing and prefer staying within the Neovim environment.

## Markdown and Formatting in Neorg
Neorg takes a unique approach to Markdown, tailored to fit into Neovim’s ecosystem:

Extended Markdown: Neorg extends traditional Markdown to include task management, agendas, and more, offering a broader range of note-taking capabilities.

Custom Tags and Icons: You can use custom tags and icons within your notes, enhancing readability and organization. This feature is particularly handy for visual categorization of notes.

Rich Formatting Options: While maintaining a text-based approach, Neorg supports rich formatting options like bold, italics, lists, and code blocks, similar to other Markdown-based apps but with a Vim-flavored twist.

## Commands and File Structure in Neorg
Neorg’s commands and file structure set it apart, emphasizing efficiency and organization:

Modal Editing: True to Vim’s spirit, Neorg leverages modal editing. This means you can switch between different modes (like insert, normal, and visual) for various actions, enhancing speed and reducing keystrokes.

Structured Directories: Neorg encourages a structured approach to organizing notes. You can set up directories for different categories or projects, making note management more systematic.

Linking Notes: Like Obsidian, Neorg allows linking between notes, but it does so within the modal editing paradigm of Vim, offering a different user experience.

Task Management Commands: Neorg provides specific commands for task management, like creating tasks, setting deadlines, and tracking progress, all within your notes.

Integration with Neovim Features: Being embedded in Neovim, Neorg can seamlessly integrate with Neovim’s features like search, replace, and even custom Vim commands.

## Final Thoughts
Neorg with Neovim has been a game-changer for my note-taking and organizational needs. While it may not be for everyone, especially those not versed in Vim, for the right user, it’s a powerful tool that boosts productivity and efficiency.

As we continue to explore the depths of what our tools can offer, Neorg stands out as a beacon for the text-centric, keyboard-loving crowd. Give it a try, dive into its community, and you might just find it revolutionizing your note-taking habits as well.

Happy note-taking!

Best,
[Rohan Kewalramani](https://rohankewal.surge.sh)
