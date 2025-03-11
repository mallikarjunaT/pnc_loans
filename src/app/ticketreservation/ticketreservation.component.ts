import { Component } from '@angular/core';

@Component({
  selector: 'app-ticketreservation',
  imports: [],
  templateUrl: './ticketreservation.component.html',
  styleUrl: './ticketreservation.component.css'
})
export class TicketreservationComponent {
  public busCapacity = 50;
  public peopleCount = 20;

  reservation(): boolean {
    let searReserverd = false;
    if (this.peopleCount <= this.busCapacity) {
      this.peopleCount++;
      searReserverd = true
    }
    return searReserverd
  }
}
