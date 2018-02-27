import { trigger, animate, style, group, query, transition } from '@angular/animations';

// FADE
export const routerTransition = trigger('routerTransition', [
  transition('* <=> *', [
    query(':enter, :leave', style({ display: 'grid', opacity: 0 })
      , { optional: true }),
    group([
      query(':enter', [
        style({ opacity: 0 }),
        animate('0.5s ease-in-out', style({ opacity: 1 }))
      ], { optional: true }),
      query(':leave', [
        style({ opacity: 1 }),
        animate('0.5s ease-in-out', style({ opacity: 0 }))
      ], { optional: true }),
    ])
  ])
])

// SLIDE
// export const routerTransition = trigger('routerTransition', [
//   transition('* <=> *', [
//     query(':enter, :leave', style({ display: 'grid' }), { optional: true }),
//     group([
//       query(':enter', [
//         style({ transform: 'translateX(100%)' }),
//         animate('0.5s ease-out', style({ transform: 'translateX(0%)' }))
//       ], { optional: true }),
//       query(':leave', [
//         style({ transform: 'translateX(0%)' }),
//         animate('0.5s ease-out', style({ transform: 'translateX(-100%)' }))
//       ], { optional: true }),
//     ])
//   ])
// ])


// -----------------------------------

// original animation from gsans Medium article & plunker
// Angular — Supercharge your Router transitions using new animation features (v4.3+)
// https://plnkr.co/edit/IDwAmHkzH07VbU0Bsxcj?p=preview

// export const routerTransition = trigger('routerTransition', [
//   transition('* <=> *', [
//     query(':enter, :leave', style({ position: 'fixed', width: '100%' })
//       , { optional: true }),
//     group([
//       query(':enter', [
//         style({ transform: 'translateX(100%)' }),
//         animate('0.5s ease-in-out', style({ transform: 'translateX(0%)' }))
//       ], { optional: true }),
//       query(':leave', [
//         style({ transform: 'translateX(0%)' }),
//         animate('0.5s ease-in-out', style({ transform: 'translateX(-100%)' }))
//       ], { optional: true }),
//     ])
//   ])
// ])

// --------------------------------------------


// this attempt based on gsans but influenced by Material2/tabs-animations.ts
// export const routerTestTransition = trigger('routerTestTransition', [
//   transition('* <=> *', [
//     query(':enter, :leave', style({ width: '100%' })
//       , { optional: true }),
//     group([
//       query(':enter', [
//         style({ transform: 'translate3d(100%, 0, 0)' }),
//         animate('0.5s ease-in-out', style({ transform: 'translate3d(0%, 0, 0)' }))
//       ], { optional: true }),
//       query(':leave', [
//         style({ transform: 'translate3d(100%, 0, 0)' }),
//         animate('0.5s ease-in-out', style({ transform: 'translate3d(-100%, 0, 0)' }))
//       ], { optional: true }),
//     ])
//   ])
// ])
