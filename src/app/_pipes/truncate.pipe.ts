import { Pipe } from '@angular/core'

@Pipe({
  name: 'truncate'
})

export class TruncatePipe {
  transform(value: string, args: string) : string {

    let limit = parseInt(args, 10);
    let trail = args.length > 1 ? args[1] : ' ..';

    return value.length > limit ? value.substring(0, limit) + trail : value;
  }
}
