import { View, Text, ImageBackground, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useLocalSearchParams, router } from 'expo-router'
import { GalleryPreviewData } from '@/constants/models/AffirmationCategory'
import AFFIRMATION_GALLERY from '@/constants/affirmation-gallery'
import me from '../../../assets/me.jpeg'
import AppGradient from '@/components/AppGradient'
import { AntDesign } from '@expo/vector-icons'

const AffirmationPractice = () => {
  const { id } = useLocalSearchParams()
  const [affirmation, setAffirmation] = useState<GalleryPreviewData>()

  useEffect(() => {
    for (let idx = 0; idx < AFFIRMATION_GALLERY.length; idx++) {
      const affirmationData = AFFIRMATION_GALLERY[idx].data
      const affirmationToStart = affirmationData.find(
        (a) => a.id === Number(id)
      )
      if (affirmationToStart) {
        setAffirmation(affirmationToStart)
        return
      }
    }
  }, [])
  return (
    <View>
      <ImageBackground source={me} resizeMode='cover' className='flex-1'>
        <AppGradient colors={['rgba(0,0,0,0.3', 'rgba(0,0,0,0.9)']}>
          <Pressable
            onPress={() => router.back()}
            className='absolute top-16 left-6'
          >
            <AntDesign name='leftcircleo' size={50} color='white' />
          </Pressable>
        </AppGradient>
      </ImageBackground>
    </View>
  )
}

export default AffirmationPractice
