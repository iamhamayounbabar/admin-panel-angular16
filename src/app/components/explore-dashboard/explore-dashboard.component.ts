import { Component } from '@angular/core';

@Component({
  selector: 'app-explore-dashboard',
  templateUrl: './explore-dashboard.component.html',
  styleUrls: ['./explore-dashboard.component.css']
})
export class ExploreDashboardComponent {
  table: any [] = [
    {adId:'#12354', userId:'#4354', dateSubmit:'24/Jan/2024', adContent:'Car For sale', verify:'Verified'},
    {adId:'#12354', userId:'#4354', dateSubmit:'24/Jan/2024', adContent:'Car For sale', verify:'Verified'},
    {adId:'#12354', userId:'#4354', dateSubmit:'24/Jan/2024', adContent:'Car For sale', verify:'Verified'},
    {adId:'#12354', userId:'#4354', dateSubmit:'24/Jan/2024', adContent:'Car For sale', verify:'Verified'},
    {adId:'#12354', userId:'#4354', dateSubmit:'24/Jan/2024', adContent:'Car For sale', verify:'Verified'},
    {adId:'#12354', userId:'#4354', dateSubmit:'24/Jan/2024', adContent:'Car For sale', verify:'Verified'},
  ]
}
