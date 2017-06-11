import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {
    private routeMap: {[key: string]: string};

    constructor(private http: Http) {}

    resolve(action, params): Observable<any> {
        switch (action) {
            case 'get-bands':
                return this.http.get('assets/data/band-list.json').map(res => res.json());
            case 'get-band':
                return this.http.get('assets/data/band-details.json')
                    .map(res => res.json().find((x) => x.id + '' === params['id']));
            case 'get-song':
                return this.http.get('assets/data/song-details.json')
                    .map(res => res.json().find((x) => x.id + '' === params['id']).songs.find((x) => x.id + '' === params['songId']));
        }

    }
}
