---
title: "My Neovim Setup"
description: "Overview of my neovim config and plugins"
pubDate: "May 5 2023"
heroImage: "/neovimsetup.png"
---

Hey everyone, so as promised, this post is going to be about
my neovim configuration and all the plugins I use. As a
full disclosure, I followed Josean Martinezes video on YouTube
on how to configure neovim and you can also check the video
out [here]("https://www.youtube.com/watch?v=vdn_pKJUda8&t=3759s").

I will also do my best to link the GitHub pages for all the plugins
so save you the Google search so without any futher adue, let's get
started!

## Editor Options

To start, I want to go over some of the basic editor settings I use
for the editor that makes the appreance look better and also make
navigation easier as well. Again, I followed Josean's video on this
and it is linked above.

```lua
local opt = vim.opt -- for conciseness

-- line numbers
opt.number = true -- shows absolute line number on cursor line (when relative number is on)

-- tabs & indentation
opt.tabstop = 2 -- 2 spaces for tabs (prettier default)
opt.shiftwidth = 2 -- 2 spaces for indent width
opt.expandtab = true -- expand tab to spaces
opt.autoindent = true -- copy indent from current line when starting new one

-- line wrapping
opt.wrap = false -- disable line wrapping

-- search settings
opt.ignorecase = true -- ignore case when searching
opt.smartcase = true -- if you include mixed case in your search, assumes you want case-sensitive

-- cursor line
opt.cursorline = true -- highlight the current cursor line

-- appearance

-- turn on termguicolors for nightfly colorscheme to work
-- (have to use iterm2 or any other true color terminal)
opt.termguicolors = true
opt.background = "dark" -- colorschemes that can be light or dark will be made dark
opt.signcolumn = "yes" -- show sign column so that text doesn't shift

-- backspace
opt.backspace = "indent,eol,start" -- allow backspace on indent, end of line or insert mode start position

-- clipboard
opt.clipboard:append("unnamedplus") -- use system clipboard as default register

-- split windows
opt.splitright = true -- split vertical window to the right
opt.splitbelow = true -- split horizontal window to the bottom

opt.iskeyword:append("-") -- consider string-string as whole word
```

Now some of the the main settings to focus on for me are the smart indent
so when I add curly braces and hit enter, the new line between them gets
indented automatically just like all the IDEs and Visual Studio Code do
for you. Another option is showing the number lines since neovim does
not show line numbers "out of the box" which to me is a little strange
like it's such a simple thing but that is the first thing that you should
have and the rest is for background colors and using true terminal colors
as I said before, the esthetic stuff.

## Plugins

So now that we have the basics ready to go, there is still a lot to be done
with the editor to make it more efficient and pretty to use as a IDE or
code editor alternitive. Here are some of the plugins I use to setup my
LSP, colorscheme. The colorscheme I use is Neosolarized and and I use it
with the Hack Nerd Font to get all the icons and symbols to work.

```lua
local status, packer = pcall(require, "packer")
if (not status) then
  print("Packer is not installed")
  return
end

vim.cmd [[packadd packer.nvim]]

packer.startup(function(use)
  use 'wbthomason/packer.nvim'
  use {
    'svrana/neosolarized.nvim',
    requires = { 'tjdevries/colorbuddy.nvim' }
  }
  use 'nvim-lualine/lualine.nvim'       -- Statusline
  use 'nvim-lua/plenary.nvim'           -- Common utilities
  use 'onsails/lspkind-nvim'            -- vscode-like pictograms
  use 'hrsh7th/cmp-buffer'              -- nvim-cmp source for buffer words
  use 'hrsh7th/cmp-nvim-lsp'            -- nvim-cmp source for neovim's built-in LSP
  use 'hrsh7th/nvim-cmp'                -- Completion
  use 'neovim/nvim-lspconfig'           -- LSP
  use 'jose-elias-alvarez/null-ls.nvim' -- Use Neovim as a language server to inject LSP diagnostics, code actions, and more via Lua
  use 'williamboman/mason.nvim'
  use 'williamboman/mason-lspconfig.nvim'

  use {
    'nvim-tree/nvim-tree.lua',
    config = function()
      require("nvim-tree").setup {}
    end
  }

  use 'glepnir/lspsaga.nvim' -- LSP UIs
  use 'L3MON4D3/LuaSnip'
  use {
    'nvim-treesitter/nvim-treesitter',
    run = function() require('nvim-treesitter.install').update({ with_sync = true }) end,
  }

  use("christoomey/vim-tmux-navigator")
  use 'kyazdani42/nvim-web-devicons' -- File icons
  use 'nvim-telescope/telescope.nvim'
  use 'nvim-telescope/telescope-file-browser.nvim'
  use 'windwp/nvim-autopairs'
  use 'windwp/nvim-ts-autotag'
  use { 'numToStr/Comment.nvim',
    requires = {
      'JoosepAlviste/nvim-ts-context-commentstring'
    }
  }
  use 'norcalli/nvim-colorizer.lua'
  use 'folke/zen-mode.nvim'
  use({
    "iamcco/markdown-preview.nvim",
    run = function() vim.fn["mkdp#util#install"]() end,
  })
  use 'akinsho/nvim-bufferline.lua'
  -- use 'github/copilot.vim'

  use 'lewis6991/gitsigns.nvim'
  use 'dinhhuy258/git.nvim' -- For git blame & browse
end)
```

For my LSP, I always have to have astro, tailwindcss as well as javascript and
typescript installed since those are the languages I use the most and I also use
the Mason plugin to installed those LSPs much easier than before.

## LSP Setups

As far as my LSP configs go, I copy-pasted those straight from the documentation
and it works perfect for me so I won't add them here as you can find the configs
on their respective GitHub pages.

## Conclusion

I know this probably was not as in depth as many would have liked for a dev environment
setup but when it comes to neovim things can get pretty lengthy and at the end of the
day, what works for me may not work for someone else so I like to talk about the basics
and then allow people to built over that the way the find convenient for them.

There you have it guys, that is all the tools and software I use as a full stack web developer
who works remotly. Make sure to follow me on IG [here]("https://www.instagram.com/rohankewal")
and on GitHub [here]("https://www.github.com/rohankewal") and catch you guys next week!
