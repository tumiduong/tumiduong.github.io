import { useMemo, useRef } from 'react';
import styles from './WeatherWidget.module.scss';
import { WmoCode, wmoCodes } from '@/app/_shared/wmoCodes';
import dynamic from 'next/dynamic';
const Lottie = dynamic(() => import('lottie-react'), { ssr: false });
import { LottieRefCurrentProps } from 'lottie-react';

export const WeatherWidget = (props: {
  temperature: number;
  wmoCode: WmoCode;
  isDay: boolean;
}) => {
  const lottieRef = useRef<LottieRefCurrentProps | null>(null);

  const description = useMemo(() => {
    if (props.wmoCode === undefined) {
      return;
    }

    return wmoCodes[props.wmoCode]?.description;
  }, [props.wmoCode]);

  const animation = useMemo(() => {
    if (props.wmoCode === undefined) {
      return;
    }

    const animationKey = props.isDay ? 'dayAnimation' : 'nightAnimation';

    return wmoCodes[props.wmoCode][animationKey];
  }, [props.wmoCode, props.isDay]);

  return (
    <div className={styles.widgetContainer}>
      <div className={styles.content}>
        <div className={styles.city}>Montreal</div>
        <div className={styles.info}>
          <div className={styles.temperature}>
            <span className={styles.value}>{props.temperature.toFixed()}</span>
            <span className={styles.unit}>°C</span>
          </div>
          <div className={styles.description}>{description}</div>
        </div>
      </div>
      <Lottie
        lottieRef={lottieRef}
        animationData={animation}
        alt={`${description} animation`}
        style={{
          height: '100%',
        }}
        onDOMLoaded={() => lottieRef?.current?.setSpeed(0.4)}
        className={styles.lottie}
      />
    </div>
  );
};
