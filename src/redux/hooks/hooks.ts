// react-redux paketinden gerekli hookları ve türleri içe aktarıyoruz.
//TypedUseSelectorHook, useDispatch, ve useSelector gibi React Redux'tan gelen hook'ları alır. Bu hook'lar, Redux ile etkileşimde bulunmak için kullanılır.
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

// RootState türünü, store dosyasından alıyoruz.
//RootState tipi, Redux store'un tam durumunu temsil eder. Bu, Redux Toolkit veya diğer Redux kütüphanelerinin oluşturduğu tüm durumları içerir.
import type { RootState } from '../store/store';

// Redux Toolkit'ten ThunkDispatch türünü içe aktarıyoruz.
//ThunkDispatch tipi, Redux Toolkit'in sağladığı bir türdür ve async thunk'ları kullanırken dispatch etmek için kullanılır.
import { ThunkDispatch } from '@reduxjs/toolkit';

// Redux Toolkit ile kullanılacak dispatch hook'unu oluşturuyoruz.
//useAppDispatch hook'u, redux dispatch fonksiyonunu kullanmak için kullanılır. Ancak burada tip güvenliği sağlanması için ThunkDispatch türü kullanılır. Bu, action'ların dispatch edilmesi sırasında async thunk'larınızı kullanmanıza olanak tanır.
export const useAppDispatch = () => useDispatch<ThunkDispatch<any, any, any>>();

// RootState türü ile tip güvenliği sağlanmış selector hook'unu oluşturuyoruz.
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
