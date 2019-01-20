import { trigger, style, transition, state, animate, group } from '@angular/animations';
export const animationsList = [
  trigger('menuNexus', [
    transition(':enter', [
      style({
        transform:'scale(0) translate(-100%,-100%)',
        transformOrigin:' 32px 32px',
        left:'32px',
        top:'32px'
      }),
      animate('0.3s linear', style({
        transform:'scale(1)  translate(0,0)',
        left:'0',
        top:'0'
      }))
    ]),
    transition(':leave', [
      style({
        transform:'scale(1)  translate(0,0)',
      }),
      animate("250ms linear", style({
        transform:'scale(0) translate(-100%,-100%)',
        borderRadius:'50%',
        width:'100vw',
        height:'100vw',
        transformOrigin:' 32px 32px',
        left:'0',
        top:'0'
      }))
    ])
  ]),
  trigger('menuNexusBtnClose',[
    transition(':enter',[
      style({
        transform:'translate3d(0,100%,0)',
        opacity:0
      }),
      animate('250ms 250ms linear', style({
        transform:'translate3d(0,0,0)',
        opacity:1
      }))
    ]),
    transition(':leave',[
      style({
        transform:'translate3d(0,0,0)',
        opacity:1
      }),
      animate('250ms 200ms linear', style({
        transform:'translate3d(0,100%,0)',
        opacity:0
      }))
    ]),
  ]),
  trigger('userPicture',[
    transition(':enter',[
      style({
        transform:'translate3d(200%,0,0)',
        opacity:0
      }),
      animate('1s 1s linear', style({
        transform:'translate3d(0,0,0)',
        opacity:1
      }))
    ]),
    transition(':leave',[
      style({
        transform:'translate3d(0,0,0)',
        opacity:1
      }),
      animate('1s 1s linear', style({
        transform:'translate3d(200%,0,0)',
        opacity:0
      }))
    ]),
  ])]

