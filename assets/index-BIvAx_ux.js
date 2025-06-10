(function() {
  const r = document.createElement('link').relList;
  if (r && r.supports && r.supports('modulepreload')) return;
  for (const s of document.querySelectorAll('link[rel="modulepreload"]')) o(s);
  new MutationObserver(s => {
    for (const e of s) if (e.type === 'childList') for (const t of e.addedNodes) t.tagName === 'LINK' && t.rel === 'modulepreload' && o(t);
  }).observe(document, { childList: !0, subtree: !0 });

  function i(s) {
    const e = {};
    return s.integrity && (e.integrity = s.integrity), s.referrerPolicy && (e.referrerPolicy = s.referrerPolicy), s.crossOrigin === 'use-credentials' ? e.credentials = 'include' : s.crossOrigin === 'anonymous' ? e.credentials = 'omit' : e.credentials = 'same-origin', e;
  }

  function o(s) {
    if (s.ep) return;
    s.ep = !0;
    const e = i(s);
    fetch(s.href, e);
  }
})();
document.addEventListener('DOMContentLoaded', () => {
  const n = document.querySelectorAll('.about__buttons button');
  n.forEach(r => {
    r.addEventListener('click', () => {
      n.forEach(o => o.classList.remove('active')), r.classList.add('active');
      const i = r.dataset.tab;
      document.querySelectorAll('.about__img-one').forEach(o => {
        o.classList.toggle('active', o.dataset.content === i);
      }), document.querySelectorAll('.about__img-two').forEach(o => {
        o.classList.toggle('active', o.dataset.content === i);
      }), document.querySelectorAll('.about__text').forEach(o => {
        o.classList.toggle('active', o.dataset.content === i);
      }), document.querySelectorAll('.section-title--about-title span').forEach(o => {
        o.classList.toggle('active', o.dataset.content === i);
      });
    });
  });
});
document.addEventListener('DOMContentLoaded', () => {
  (() => {
    const r = document.querySelector('.vertical-slider__wrapper'),
      i = document.querySelector('.vertical-slider__slides'), o = document.querySelectorAll('.vertical-slider__slide'),
      s = document.getElementById('slider-title');
    if (!i || o.length === 0) return;
    let e = 0, t = o.length, c = !1, p = window.innerWidth <= 375;
    const d = () => {
      if (p) {
        for (let a = 0; a < t; a++) o[a].style.display = 'flex', o[a].style.opacity = '1';
        u();
      } else {
        for (let a = 0; a < t; a++) o[a].style.display = 'flex', o[a].style.opacity = '1';
        h();
      }
      l();
    }, l = () => {
      var a;
      if (s && o[e]) {
        const f = (a = o[e].querySelector('p')) == null ? void 0 : a.textContent;
        console.log(`New title: ${f}`), f && f.trim() !== '' ? s.textContent = f : s.textContent = `Lörem ipsum dorade boktig till geosylig postmodern ${e + 1}`;
      }
    }, m = () => {
      e <= 0 || c || (c = !0, e--, l(), b(), setTimeout(() => {
        c = !1;
      }, 300));
    }, g = () => {
      e >= t - 1 || c || (c = !0, e++, l(), b(), setTimeout(() => {
        c = !1;
      }, 300));
    }, b = () => {
      if (!o[e]) return;
      const a = o[e].offsetTop;
      i.scrollTo({ top: a - 50, behavior: 'smooth' });
    }, _ = a => {
      a.preventDefault(), a.deltaY > 0 ? g() : m();
    }, h = () => {
      r.addEventListener('mouseenter', () => {
        r.addEventListener('wheel', _, { passive: !1 });
      }), r.addEventListener('mouseleave', () => {
        r.removeEventListener('wheel', _);
      });
    }, u = () => {
      let a;
      const f = () => {
        for (let y = 0; y < t; y++) o[y].classList.remove('active-slide');
        e >= 0 && e < t && o[e].classList.add('active-slide');
      };
      i.addEventListener('scroll', () => {
        a && clearTimeout(a), a = setTimeout(() => {
          const y = i.scrollTop, L = o[0].offsetHeight + 20;
          let v = Math.floor(y / L);
          y % L / L > .5 && v < t - 1 && v++, v >= 0 && v < t && v !== e && (e = v, f(), l());
        }, 100);
      }), f();
    }, w = () => {
      const a = !p;
      p = window.innerWidth <= 768, a !== !p && d();
    };
    window.addEventListener('resize', w), d();
  })();
});
let k = new Swiper('.swiper', {
  initialSlide: 1,
  spaceBetween: I(),
  slidesPerView: S(),
  pagination: { el: '.swiper-pagination', clickable: !0 },
  navigation: { nextEl: '.swiper-button-next-custom', prevEl: '.swiper-button-prev-custom' },
});

function I() {
  return window.innerWidth >= 1440 ? 50 : 18;
}

function S() {
  return window.innerWidth >= 1440 ? 3 : 1;
}

window.addEventListener('resize', () => {
  k.params.spaceBetween = I(), k.params.slidesPerView = S(), k.update();
});
document.addEventListener('DOMContentLoaded', () => {
  const n = document.querySelectorAll('.accordion__list-mobile .accordion__item');
  let r = null;

  function i(e) {
    const t = e.querySelector('.accordion__item-content');
    t && (t.style.maxHeight = t.scrollHeight + 'px', t.offsetHeight, t.style.maxHeight = '0', t.addEventListener('transitionend', function c() {
      e.classList.remove('accordion__item--active'), t.removeEventListener('transitionend', c);
    }));
  }

  function o(e) {
    const t = e.querySelector('.accordion__item-content');
    t && (e.classList.add('accordion__item--active'), t.style.maxHeight = t.scrollHeight + 'px');
  }

  n.forEach(e => {
    const t = e.querySelector('.accordion__item-wrapper');
    t && t.addEventListener('click', () => {
      e.classList.contains('accordion__item--active') ? (i(e), r = null) : (r && i(r), o(e), r = e);
    });
  });
  const s = document.querySelector('.accordion__list-desktop .accordion__item');
  s && s.classList.add('accordion__item--active');
});
const q = [{
    id: 1,
    title: 'Growing your blog to a steady income',
    text: `When I started developing my blog, it was difficult. I lacked time and knowledge, and growth required significant investment. The blog was small, and there were almost no orders for advertising.
I was invited to one of the community projects and decided to give it a try. After joining the community, I started actively participating in projects, earning income and developing my blog. Thanks to the streamlined processes and quality materials, I was able to accelerate my progress significantly.
Now my income is $3000 per month, mostly thanks to advertising infoproducts and crypto-offers. I am very happy to be part of a strong environment that helps me to grow and develop faster.`,
    footer: 'Victoria Shevchuk, media blogger',
  }, {
    id: 2,
    title: 'Fitness course: quick launch and scaling up',
    text: `Participated in a commercial community project where the launch of an offer took only three days due to the well-established processes. There were six specialists in the team, which allowed for efficient distribution of tasks.
The product was a fitness course with a focus on glute training. Promotion through community bloggers reduced advertising costs and increased profits.
My first month's income was $1500, and the project scaled thereafter. I cannot publish the details of the project in the public domain.`,
    footer: 'Andrey Rudenko, IT developer',
  }, {
    id: 3, title: 'Crypto-offers with high profitability', text: `After joining the community, I decided to test crypto-offers. The launch was quick thanks to the well-established processes.
I quickly reviewed converting creatives, and the tests were inexpensive - only $10.7 per registration. To amplify results, I used an aggressive news preload with the country's president, which yielded a great response.
Launched via pharma accounts and auto-regs with cloaca. Worked with Facebook and Instagram, targeting an audience of men and women between the ages of 28 and 67.
Made $6,349 net profit in 3 weeks of shedding.`, footer: 'Anatoly Voitenko, media buyer',
  }, {
    id: 4,
    title: 'Scaling commodity projects',
    text: `I've been a member of the community for three months now and I'm completely happy with the results. At first I was sceptical about participating in projects, but after talking to the moderators I decided to give it a try. I threw in a few product projects that were not working for me.
Thanks to well-built processes, quality analytics and competent positioning, the projects not only began to bring profit, but also scaled significantly. Now I am actively involved in both community projects and my own private projects.
During this time I have considerably pumped up my skills and increased my results 4 times.`,
    footer: 'Svetlana Gumenyuk, entrepreneur',
  }, {
    id: 5,
    title: 'Blog growth through arbitrage auto-funnels',
    text: `Regarding the community, I immediately realised that it was a great opportunity for growth. In the community I got access to clear strategies, practical cases and a strong environment. 
Once I started working with arbitrage autofunnels, I significantly accelerated the growth of my blog and increased my income. These autofunnels helped me to work more effectively with advertising, test new approaches and optimise content.
I've set up a steady, growing income, and I'm actively growing my blog. The community is a driver for growth and development.`,
    footer: 'Onishchuk Anastasia, blogging and arbitrage  ',
  }, {
    id: 6, title: 'From freelancing without results to career growth', text: `Before joining the community, I passed various tests and interviews, but did not get results. Freelancing was also not yielding results due to lack of experience. After joining the community, I started working on commercial projects. 
Apart from earning opportunities, the community has greatly impacted my career growth. Thanks to the support and resources I received, I was able to achieve results that would have taken me much more time and money without this help.
I now work for a good company and continue to develop professionally.`, footer: 'Maria Ivanchuk, motion designer',
  }], E = document.querySelectorAll('.accordion__item'), A = document.querySelector('.accordion__content-title'),
  T = document.querySelector('.accordion__content-text'), B = document.querySelector('.accordion__content-footer');

function x(n) {
  const r = q.find(i => i.id === parseInt(n));
  if (r) {
    A.textContent = r.title;
    const i = r.text.split(`

`), o = document.querySelectorAll('.accordion__content-text');
    for (let t = 1; t < o.length; t++) o[t].remove();
    T.textContent = i[0].trim();
    const s = document.querySelector('.accordion__item-content'),
      e = document.querySelector('.accordion__content-footer');
    for (let t = 1; t < i.length; t++) {
      const c = document.createElement('p');
      c.className = 'accordion__content-text', c.textContent = i[t].trim(), s.insertBefore(c, e);
    }
    B.textContent = r.footer;
  }
}

E.forEach(n => {
  n.addEventListener('click', function() {
    E.forEach(i => i.classList.remove('accordion__item--active')), this.classList.add('accordion__item--active');
    const r = this.getAttribute('data-id');
    x(r);
  });
});
x(1);
document.addEventListener('DOMContentLoaded', () => {
  const n = document.querySelectorAll('.modules__item'), r = window.innerWidth >= 1440;
  n.forEach(i => {
    const o = i.querySelector('.modules__item-header'), s = i.querySelector('.modules__item-description'),
      e = i.querySelectorAll('.modules__item-btn'), t = i.querySelector('.modules__item-description-wrapper'),
      c = i.querySelector('.modules__item-description-btn'), p = i.querySelector('.modules__item-btn-close');
    let d = null;
    r || o.addEventListener('click', () => {
      s.classList.contains('is-open') ? (s.classList.remove('is-open'), i.classList.remove('modules__item--active')) : (s.classList.add('is-open'), i.classList.add('modules__item--active'));
    }), e.forEach(l => {
      l.addEventListener('click', () => {
        const m = l === d, g = l.getAttribute('data-description');
        if (d && d.classList.remove('is-active'), m) {
          t.classList.remove('is-open'), d = null;
          return;
        }
        l.classList.add('is-active'), d = l, c && (t.classList.contains('is-open') ? (c.style.opacity = '0', setTimeout(() => {
          c.innerHTML = g, c.style.opacity = '1';
        }, 150)) : (c.innerHTML = g, t.classList.add('is-open')));
      });
    }), p.addEventListener('click', () => {
      t.classList.remove('is-open'), d && (d.classList.remove('is-active'), d = null);
    });
  }), window.addEventListener('resize', () => {
    window.innerWidth >= 1440 !== r && location.reload();
  });
});
document.addEventListener('DOMContentLoaded', () => {
  const n = document.querySelector('.team__slide-prev-button'), r = document.querySelector('.team__slide-next-button'),
    i = document.querySelectorAll('.team__slide-nav-dot'), o = document.getElementById('profile-image'),
    s = document.getElementById('profile-title'), e = document.getElementById('profile-name'),
    t = document.getElementById('profile-subtitle'), c = document.getElementById('info-title'),
    p = document.getElementById('info-subtitle'), d = document.getElementById('info-description'), l = [{
      image: {
        srcset: './img/team/team-1.webp 1x, ./img/team/team-1@2x.webp 2x',
        src: './img/team/team-1.webp',
        alt: 'Roman Kirilenko',
      },
      profile: {
        title: 'Expert in task decomposition',
        name: 'Roman Kirilenko',
        subtitle: 'Fullstack developer in Java',
      },
      info: {
        title: 'Community manager in task decomposition',
        subtitle: 'Moderator of automated processes in CRM',
        description: 'The community brings together professionals who jointly develop commercial projects, achieving new levels of profit. For this purpose, advanced management tools are used: process automation, analytics and task decomposition.',
      },
    }, {
      image: {
        srcset: './img/team/team-2.webp 1x, ./img/team/team-2@2x.webp 2x',
        src: './img/team/team-2.webp',
        alt: 'Kimakivska Angelina',
      },
      profile: { title: 'Expert in digital marketing', name: 'Kimakivska Angelina', subtitle: 'Creator of media system' },
      info: {
        title: 'Community manager in digital marketing',
        subtitle: 'Moderator of digital processes in marketing',
        description: 'Community builds and scales business processes to grow project revenues. Bloggers and marketers develop advertising strategies, scale auto-funnels and traffic monetisation models.',
      },
    }, {
      image: {
        srcset: './img/team/team-3.webp 1x, ./img/team/team-3@2x.webp 2x',
        src: './img/team/team-3.webp',
        alt: 'Dmitry Chernishevsky',
      },
      profile: { title: 'DIAM VOLUTPAT', name: 'Dmitry Chernishevsky', subtitle: 'B2B process architect' },
      info: {
        title: 'Community manager on scalable models',
        subtitle: 'Moderator on scaling B2B models',
        description: 'Entrepreneurs and community experts develop and scale B2B models, integrating them into the ecosystem and commercial processes. These models enable strategic growth, automation and scaling, creating an architecture of operations and integrations for sustainable projects.  ',
      },
    }];
  let m = 0;

  function g(h) {
    const u = l[h], w = [o, s, e, t, c, p, d];
    w.forEach(a => a.classList.add('fade-out')), setTimeout(() => {
      o.srcset = u.image.srcset, o.src = u.image.src, o.alt = u.image.alt, s.textContent = u.profile.title, e.textContent = u.profile.name, t.textContent = u.profile.subtitle, c.textContent = u.info.title, p.textContent = u.info.subtitle, d.textContent = u.info.description, w.forEach(a => {
        a.classList.remove('fade-out'), a.classList.add('fade-in');
      }), setTimeout(() => {
        w.forEach(a => a.classList.remove('fade-in'));
      }, 300);
    }, 300), i.forEach((a, f) => {
      a.classList.toggle('active', f === h);
    });
  }

  function b() {
    m = (m + 1) % l.length, g(m);
  }

  function _() {
    m = (m - 1 + l.length) % l.length, g(m);
  }

  r.addEventListener('click', b), n.addEventListener('click', _), i.forEach(h => {
    h.addEventListener('click', () => {
      m = parseInt(h.getAttribute('data-index')), g(m);
    });
  });
});
(() => {
  var s;
  const n = {
    openModalBtn: document.querySelectorAll('[data-mobile-open]'),
    closeModalBtn: document.querySelectorAll('[data-mobile-close]'),
    modal: document.querySelector('[data-mobile]'),
    backdrop: document.querySelector('[data-mobile-backdrop]'),
    body: document.body,
    modalItems: document.querySelectorAll('.mobile-menu__nav-item'),
    btnItems: document.querySelectorAll('.mobile-menu__buttons > *'),
  };
  n.openModalBtn.forEach(e => {
    e.addEventListener('click', r);
  }), n.closeModalBtn.forEach(e => {
    e.addEventListener('click', r);
  }), (s = n.backdrop) == null || s.addEventListener('click', r);

  function r() {
    var t;
    const e = n.modal.classList.contains('mobile-menu__is-hidden');
    n.modal.classList.toggle('mobile-menu__is-hidden'), (t = n.backdrop) == null || t.classList.toggle('mobile-menu__is-hidden'), e ? i() : o();
  }

  function i() {
    const e = window.scrollY;
    n.body.style.position = 'fixed', n.body.style.top = `-${e}px`, n.body.style.left = '0', n.body.style.right = '0', n.body.style.width = '100%', n.body.style.overflow = 'hidden', n.body.dataset.scrollY = e;
  }

  function o() {
    n.body.style.position = '', n.body.style.top = '', n.body.style.left = '', n.body.style.right = '', n.body.style.width = '', n.body.style.overflow = '';
    const e = parseInt(n.body.dataset.scrollY || '0');
    window.scrollTo(0, e), delete n.body.dataset.scrollY;
  }
})();
