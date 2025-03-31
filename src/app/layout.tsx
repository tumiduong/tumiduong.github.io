'use client';
import { Manrope } from 'next/font/google';
import './globals.scss';
import { fetchWeatherApi } from 'openmeteo';
import { useEffect, useState, useMemo } from 'react';
import { WeatherWidget } from './_components/WeatherWidget/WeatherWidget';
import { WmoCode } from './_shared/wmoCodes';
import { Nav } from './_components/Nav/Nav';
import { Footer } from './_components/Footer/Footer';
import { LoadingCircle } from './_components/LoadingCircle.tsx/LoadingCircle';

const manrope = Manrope({ subsets: ['latin'] });

const meteoParams = {
  latitude: 45.5088,
  longitude: -73.5878,
  current: ['temperature_2m', 'weather_code', 'is_day'],
};
const meteoUrl = 'https://api.open-meteo.com/v1/forecast';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [loading, setLoading] = useState<boolean>(true);
  const [temperature, setTemperature] = useState<number>(0);
  const [wmoCode, setWmoCode] = useState<WmoCode>(0);
  const [isDay, setIsDay] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      fetchWeatherApi(meteoUrl, meteoParams)
        .then(res => {
          const current = res[0].current();
          setTemperature(Math.trunc(current?.variables(0)?.value() ?? 0));
          setWmoCode((current?.variables(1)?.value() as WmoCode) ?? 0);
          setIsDay(!!current?.variables(2)?.value());
        })
        .catch(err => console.log(err))
        .finally(() => setLoading(false));
    }, 1000);
  }, []);

  const wmoClassName = useMemo(() => {
    const daytime = isDay ? 'day' : 'night';

    return `wmo-${wmoCode} wmo-${daytime}`;
  }, [wmoCode, isDay]);

  return (
    <html lang='en'>
      {loading ? (
        <body className='loading'>
          <LoadingCircle />
        </body>
      ) : (
        <body className={`${manrope.className} ${wmoClassName}`}>
          <WeatherWidget
            temperature={temperature}
            wmoCode={wmoCode}
            isDay={isDay}
          />
          <nav>
            <Nav />
          </nav>
          <main>{children}</main>
          <footer>
            <Footer />
          </footer>
        </body>
      )}
    </html>
  );
}
