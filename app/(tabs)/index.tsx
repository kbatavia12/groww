import { Image, StyleSheet, Platform, Button } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useEffect, useState } from 'react';
import { getExploreData } from '@/services/ExploreService';

interface IStock {
  ticker: string,
  price: string,
  change_amount: string,
  change_percentage: string,
  volume: string
}

export default function HomeScreen() {

  const [topGainers, setTopGainers] = useState<Array<IStock>>([]);
  const [topLosers, setTopLosers] = useState<Array<IStock>>([]);

  useEffect(() => {
    (async function peekReponse() {
      const apiResponse = await getExploreData();
      console.log(apiResponse)
      setTopGainers(apiResponse["top_gainers"]);
      setTopLosers(apiResponse["top_losers"])
    })();
  }, [])

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">
          {topGainers.map((gainer) => (
            <ThemedText style= {{color: "green"}} key = {gainer.ticker}>{`${gainer.ticker} - ${gainer.change_percentage}\n`}</ThemedText>
          ))}
          {topLosers.map((loser) => (
            <ThemedText style = {{color: "red"}} key = {loser.ticker}>{`${loser.ticker} - ${loser.change_percentage}\n`}</ThemedText>
          ))}
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
