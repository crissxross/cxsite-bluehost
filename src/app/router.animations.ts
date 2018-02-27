import {trigger, animate, style, group, query, transition} from '@angular/animations';

// original animation from gsans article/plunker
// https://plnkr.co/edit/IDwAmHkzH07VbU0Bsxcj?p=preview
export const routerTransition = trigger('routerTransition', [
  transition('* <=> *', [
    query(':enter, :leave', style({ position: 'fixed', width: '100%' })
      , { optional: true }),
    group([
      query(':enter', [
        style({ transform: 'translateX(100%)' }),
        animate('0.5s ease-in-out', style({ transform: 'translateX(0%)' }))
      ], { optional: true }),
      query(':leave', [
        style({ transform: 'translateX(0%)' }),
        animate('0.5s ease-in-out', style({ transform: 'translateX(-100%)' }))
      ], { optional: true }),
    ])
  ])
])


export const routerTestTransition = trigger('routerTestTransition', [
  transition('* <=> *', [
    query(':enter, :leave', style({ width: '100%' })
      , { optional: true }),
    group([
      query(':enter', [
        style({ transform: 'translate3d(100%, 0, 0)' }),
        animate('0.5s ease-in-out', style({ transform: 'translate3d(0%, 0, 0)' }))
      ], { optional: true }),
      query(':leave', [
        style({ transform: 'translate3d(100%, 0, 0)' }),
        animate('0.5s ease-in-out', style({ transform: 'translate3d(-100%, 0, 0)' }))
      ], { optional: true }),
    ])
  ])
])
