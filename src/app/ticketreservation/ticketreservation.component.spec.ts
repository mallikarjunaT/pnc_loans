import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketreservationComponent } from './ticketreservation.component';



describe('ticket Reservation', () => {
  it('ticket reservation done or not', () => {
    //Arrainge
    let Reservation = new TicketreservationComponent();

    //Act
    let isReserved = Reservation.reservation();

    //Assert
    expect(isReserved).toBeTruthy()

  })
})
