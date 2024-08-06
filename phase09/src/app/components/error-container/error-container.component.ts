import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-error-container',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './error-container.component.html',
  styleUrl: './error-container.component.scss',
})
export class ErrorContainerComponent {
  @Input() errorMessage: string = '';
}
