export const email = 'rkewalramani4@gmail.com';
export const location = 'New Jersey, USA';
export const availability = 'Available for new projects';
export const replyTime = 'I reply to every message within 24 hours.';

// Turnstile site keys are public by design, so this one belongs in the repo.
// Its secret half is set with `wrangler secret put TURNSTILE_SECRET`.
//
// Leaving this empty turns Turnstile off: the widget is not rendered and the
// Worker does not check for a token. Set both halves together, or the form
// shows a challenge whose answer nothing verifies.
export const turnstileSiteKey = '0x4AAAAAAEagn8fogOFbLt3d';

export const socialLinks: {
  label: string;
  shortLabel: string;
  handle: string;
  url: string;
}[] = [
    {
      label: 'GitHub',
      shortLabel: 'GitHub',
      handle: '@rohankewal',
      url: 'https://github.com/rohankewal'
    },
    {
      label: 'LinkedIn',
      shortLabel: 'LinkedIn',
      handle: 'Rohan Kewalramani',
      url: 'https://www.linkedin.com/in/rohankewalramani/'
    },
    {
      label: 'Upwork',
      shortLabel: 'Upwork',
      handle: 'Rohan Kewalramani',
      url: 'https://www.upwork.com/freelancers/~01ef28d944461be260'
    },
    {
      label: 'X / Twitter',
      shortLabel: 'X',
      handle: '@rohankewal',
      url: 'https://x.com/rohankewal'
    }
  ];
