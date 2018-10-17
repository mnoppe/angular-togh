import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from '../models/hero';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
        { id: 11, name: 'Metallica', img: '/assets/images/metallica.jpg', desc: 'Metallica is an American heavy metal band. ' +
        'The band was formed in 1981 in Los Angeles, California by drummer Lars Ulrich and vocalist/guitarist James Hetfield, ' +
        'and has been based in San Francisco, California for most of its career.' },
        { id: 12, name: 'Led Zeppelin', img: '/assets/images/led_zeppelin.jpg', desc: 'Led Zeppelin were an English rock band' +
        ' formed in London in 1968. ' +
        'The group consisted of guitarist Jimmy Page, singer Robert Plant, bassist and keyboardist John Paul Jones, ' +
        'and drummer John Bonham. The band\'s heavy, guitar-driven sound has led them to be cited as one of the progenitors ' +
        'of heavy metal.' },
        { id: 13, name: 'Rory Gallagher', img: '/assets/images/rory_gallagher.jpg', desc: 'William Rory Gallagher was an Irish ' +
        'blues and rock multi-instrumentalist, songwriter, and producer. Born in Ballyshannon, County Donegal, and brought up in Cork, ' +
        'Gallagher recorded solo albums throughout the 1970s and 1980s, after forming the band Taste during the late 1960s. '},
        { id: 14, name: 'ZZ Top', img: '/assets/images/zztop.jpg', desc: 'ZZ Top is an American rock trio formed in 1969 in Houston, ' +
        'Texas. The band has, since 1970, consisted of bassist/vocalist Dusty Hill, vocalist/guitarist Billy Gibbons, and drummer Frank ' +
        'Beard. "As genuine roots musicians, they have few peers", according to musician, critic and collector Michael "Cub" Koda.' },
        { id: 15, name: 'Channel Zero', img: '/assets/images/channel_zero.jpg', desc: 'Channel Zero is a Belgian heavy metal band, ' +
        'formed in Brussels, Belgium, in 1990. They are one of the best known heavy metal bands from Belgium. They disbanded at the ' +
        'height of their career in 1997, however in 2009, the band announced a series of reunion gigs starting in January 2010.' },
        { id: 16, name: 'Black Sabbath', img: '/assets/images/black_sabbath.jpg', desc: 'Black Sabbath were an English rock band, ' +
        'formed in Birmingham in 1968, by guitarist and main songwriter Tony Iommi, bassist and main lyricist Geezer Butler, ' +
        'drummer Bill Ward and singer Ozzy Osbourne. Black Sabbath are often cited as pioneers of heavy metal music.' },
        { id: 17, name: 'Pink Floyd', img: '/assets/images/pink_floyd.jpg', desc: 'Pink Floyd were an English rock band formed ' +
        'in London in 1965. They achieved international acclaim with their progressive and psychedelic music.' },
        { id: 18, name: 'Jimi Hendrix', img: '/assets/images/jimi_hendrix.jpg', desc: 'James Marshall "Jimi" Hendrix was an American ' +
        'rock guitarist, singer, and songwriter. Although his mainstream career spanned only four years, he is widely regarded as one ' +
        'of the most influential electric guitarists in the history of popular music, and one of the most celebrated musicians of the ' +
        '20th century.' },
        { id: 19, name: 'Deep Purple', img: '/assets/images/deep_purple.jpg', desc: 'Deep Purple are an English rock band formed in ' +
        'Hertford in 1968. The band is considered to be among the pioneers of heavy metal and modern hard rock, although their musical ' +
        'approach changed over the years. Originally formed as a progressive rock band, the band shifted to a heavier sound in 1970.' },
        { id: 20, name: 'AC/DC', img: '/assets/images/acdc.jpg', desc: 'AC/DC are an Australian rock band formed in Sydney in 1973 by ' +
        'brothers Malcolm and Angus Young. Their music has been described by music journalists as hard rock, blues rock, and, ' +
        'controversially, heavy metal; the group have defined themselves as "a rock and roll band, nothing more, nothing less".' }
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
