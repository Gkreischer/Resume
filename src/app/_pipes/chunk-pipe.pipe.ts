import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'chunk',
})
export class ChunkPipe implements PipeTransform {
  transform(array: any[], size: number): any[][] {
    return Array.from({ length: Math.ceil(array.length / size) }, (v, i) =>
      array.slice(i * size, i * size + size)
    );
  }
}