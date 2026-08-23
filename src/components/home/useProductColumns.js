'use client'
import { useTranslations } from 'next-intl'
export default function useProductColumns() {
  const t = useTranslations('Header')
  return [
    {
      label: t('columns.websites.label'),
      items: [
        { title: t('columns.websites.items.oneP'), href: '/landing' },
        { title: t('columns.websites.items.corporate'), href: '/corporate' },
        { title: t('columns.websites.items.store'), href: '/online-shop' },
      ],
    },
    {
      label: t('columns.specialized.label'),
      items: [
        { title: t('columns.specialized.items.dealer'), href: '#' },
        { title: t('columns.specialized.items.tourism'), href: '#' },
        { title: t('columns.specialized.items.realEstate'), href: '#' },
      ],
    },
  ]
}
