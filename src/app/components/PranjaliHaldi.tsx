"use client"

import { FC, useCallback, useEffect, useRef, useState } from 'react';
import LightGallery from 'lightgallery/react';
import { LightGallery as ILightGallery } from 'lightgallery/lightgallery';
import lgZoom from 'lightgallery/plugins/zoom';
import lgThumbnail from 'lightgallery/plugins/thumbnail';

import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

const imageIds = [
   '1w87d3dXDf9qlSmi44O57dCcGZkhPKYGP',
'125JR_YaA0yvoY8cCG-0yOOAf9dVVsrQv',
'1cD54mq4IfZSg8gNwIM6FedpP56q2sb90',
'1OLdGrMNtzY2GXGxjL6wfs7yECdzRQYy1',
'1eAKmJCwtMz_WlOE1R-bDVDkoinh3UHk_',
'15tH0QSi2iKQcL7N-B9enuYD7s4sH6Cuh',
'1IS6LLMlC_sQhVbedQrBEtllDLPL_KV1N',
'1KUTNrhtwO4IA3ymqAXch9UMHEjZBVQ2C',
'1ICpGyt728nGunYVOXUPDCngGRbCp92Kh',
'191Hb7wNybk6iHOP7hayHyoIYiqQZEY6J',
'1kfUdkNgNBWNCJiPhFv6V648KqUzuwwWH',
'1AWuaAoq96TallKlHAdrCdTsuxOoKc2ye',
'17OzI2h1bGDdUbMJbf820S5J2MkPokwzg',
'1lvl5Nxd0FXRs2RtDV9Qfmyw7mhX9Kliv',
'1_Ix3sF4aeHEf_DSPorslsQmdoHr3QCDx',
'1LP2zpgjrA0P5KvGrZq4O2WHMdsPAy-j5',
'1G2C63kiP2uYdYsbSesq3uaVdHB0-2Nj9',
'176ZwzmsdMQj7HgUKrfKXKXhksTTCuUQo',
'1ECu9MRLFN8kJGF65NkuJzieiMY1_aeAT',
'1xxKzOFBmv5sERz_vIAs4jxsfOdNfbcDX',
'1ayVVynyivYlzxeE1zEtNIYzSkmfmUOKK',
'1zGbw9beHvAV3q-AhkGYsve97eo-5OhbC',
'1rZnueOXVSAKDxYsKMBQ_74EbYyRfmX7a',
'15BcpRjsG8Jm3k6s0jhqKitkyGNmjAHn0',
'1VSZ91l3XmK1NHeNe3K594jwUjPtjdf2D',
'1fDGddlsW1E9ybWXyStSKrPIJvZEe7IvB',
'1ybI7i7iWmECvM9NqM8qvBXVYakZ6aFvG',
'1FDRkcn37PuwITooIrXYlZfVmy_CgGmqK',
'1pScj0w-1ceBw0Gmvj_LSIeoTtnkYB2BV',
'1DBvAa6QEc4TLwMftGDeQU8Bd6hfD5IgZ',
'13IngXgm_W227NVjBE_ELylP5gaHoRRSM',
'16cMziHMv3ZuDUPTFBzXlJqFAMHr64pw0',
'1mAziHNyapH0Mhh5HGhgqGZMHsL3YKieO',
'1aAfgGTEAsmnxFzhFSrCYMaT44dH9ZxIO',
'1NLu2Tda1KPN29w52RKZOEn8fvv3BTxBX',
'1pGHolElGrXWIun0YmUyGkj7J0-LcndZv',
'1ZDbsvyEuE4zHZ2MZv9PbvAUFew7aQAO4',
'1MKcj0kSF53X-uet8EH7J9TqGzSNo2GCF',
'1Bh4yP7n7n_Bln7HQmVY8B5I14NRdvEIs',
'1PwNdumAh2hrV9_N5SeVeYaZ2PigBLMMT',
'1VuFZz6pMaHORO_XHrXjFQ9mMTGg2E7eN',
'1qBawTUd0DdMHH-5QfytF8Do4rT-ryMBH',
'1eshp82VuOTLOHOhOnY8ObNj2YoI4e8dL',
'15iegXdG0PRHcbGNpRAEgWEoAuiz3kdVG',
'1RjY7MnJlLTb4ievMl_VGtVt6EzWS4yfO',
'1_3XV3ifapPZGHl-GnMdVt0tbyK0dsbLf',
'1ixRKFT5_F-4d_FGvj2Xv0JCt7X52Y8YE',
'1LLTK6N64arUyRMIzU8laAzlb7DV9H71w',
'1pOBiTiWAaaIR7lM1nLQ635VFmIgvNH5_',
'1cd8GaOc9ip9LGkelrRKRwzMaCj6Q9oIt',
'1pZTm7EBb8MH8jLOkxBlOO3iEx_Uf8RL-',
'19pZAus-Dd39WCorILQc3PlbFVGIWbS4v',
'1heopfewZ0sD62uvYsM3r5jd3IyEfZIkT',
'1jjX00ETNjyAqeqe7-Q_jbHYS6mnrLe7Z',
'1CpiUv0WhuY8sOVoJwB_n-I7fv0dOW7XG',
'1MhfL7hG6gSrwFQkhk2o0atbxlhRS31d1',
'1ikWOX9yfncUFl4kyExIrmv4JirS3X-PB',
'15uBhTx_y47XdLhUcYbPaUcEI-wI1CDHe',
'18IIMDcSlNMV4HiPlnjCAmpwMFaAFzSlt',
'1JB-5oNL6oAVH4G6KZMIwJbmiyk6gUUBa',
'1htJZ1oQEecF2vgozUR-ftVVQwZGfN6bs',
'1YP5vUS8jhcblf96GmcERD3rXW0eaFiLz',
'1gwlcDTBTAJ3vC44yl2k36KGQPpGPLqdE',
'1PkiTP7hmFHarreBYdU4-x4B4Q2EtPE8K',
'15CR2V_Wg2ssC0WFRXmfUfge5-WX_lwA7',
'1fbumRtIQKZpPpzxYkIYH-L5XZSqWoa2x',
'1TSNsWTTEXlWZK58SHqS4BAf5RijwAbDV',
'1OKBiBzru2IplXekXOVr6RuazA3d_-O_f',
'1eUgZ09FhIMNq3dtzWRGbe8xhQRs4ogYz',
'17jbz8ZbwgVOGzQhVWppNB2H2aNSSeqHA',
'1T5OnNkOGBpFsk_Xl1MupaD18EAd6Wxjw',
'13cwI8E2DMDmDSiHHYHZLNvAtRc_CciNt',
'1K3b7rT2ROWuOFeTWiKYggDUWRG3v__D4',
'1YDuYf9C6zqBWwN_mAl1GTCQEurVXfaLp',
'1WYWGFek5LbvZv6yeu7r9q7-jFF-u0Mb_',
'1MpR8Fp1J7x--8rvdSwViSAldYTaj_phN',
'1SRTfXiyeKqBTZkZ_zfJCTSXIUJh6hbhZ',
'1LgLII9i9tw1iqY-OvKPkBY1ELGM2eyjk',
'14nC0skms-Av0xYnIhuW4QCKzGX9i4sjj',
'1f9HJMxDmlYC-9SGSRChRYXK4aEa5u_nv',
'1Z9IkbxWO-qk8x-3KVLgsyoPewvC1tkwT',
'1r5D8TN6Fl3pMD8rbCv6aIzzceU80DCFN',
'1_XUvfTXCIjk06PTp-lk2W_dPVNTZMI3f',
'1E_fL0PgedXUzby1L0d5Wej2oujlLDvy9',
'1JxOQ4iJ2L4MNvSY1llNNgx3Z9UcOYsfV',
'1w-69604b6pGjQObf8rn2odOa-GS5_iej',
'1_ygRMvaQn_5C2x6vpk5jFYNL1EH96esT',
'1slj6sRC24AS-WWuVL3Rj_U2IG6qVXQiY',
'1_xWKHqIAXiuvjyGngncu6XwnCzYLx0lP',
'11MZdFHNdvvsrRvlHkg2o6Az89s2hw22t',
'1UwkQJZxwQyk2FRZGJrrGYa4JovgjTQRB',
'1PXqiN7gy2jjEu7daIOLRXyWg7i4RdRRd',
'1FmS5gEPUxghK8obf95RQhYFd2IOGrjdU',
'1cQqHZKNYStXn-HqOY4X6RUfcDl9qdnKK',
'1_bZa5Vwr4sj6udhzq3BZThZJNN4B51_O',
'1r0RnSGK_KI4JfGeY6INy68320d4osfQ_',
'1xHhOQmD1M5CF7qg1v8cBR46SSJkZkzMB',
'1PoAHW7WYORZoURZqCkxYKYyUQf5pNGar',
'1U41HkDK41JAF1OGPrLQX7W6-bu0UEXzE',
'1z-88HBOQvdifX7wEggy2VwlL0YTlHzI7',
'1fkyxNcm4cCv9K5CvlxyW192Nx5iUWw8i',
'1-5DctoyyXKnaa37oHngsLlVGTCU7dP4R',
'1Ieb3Uwwk3GibMYi_gCw_JclDUJISwqk_',
'1kOO-KvvhZC93u1_rBvOTMHchQiPQxRPh',
'1hr1GiaEJRqrgJLywhqdsomBMiOogRQhF',
'1De0pqcYYXjErkvX7yOyKUZn4uxsLvRqd',
'1XUMa2HpXnPmkxR_mqhUM2tj8q5I7gAHa',
'184oqPI-ap_UWHMgAvYwu_tRp50b2LQBD',
'1_ZTv-RBYZu0Krw-SL6B8S5-AjiwnfoF6',
'11WJq0xTUIJfrwqtzkti8yrr2fZWLY6rz',
'1MtEXTKkwi9wGQvX7dC0zJaPUyZSeb0Hu',
'16OkRU_tfPbzhCba5LUPnArLqb9bjkMDl',
'1X5Bg-EewQUdEi95LNfBbw1NhiWZQaCZ2',
'1O3zi45sOIm_ROKdZBpaYq-ymnXrEdJv0',
'1SgPfPo5wItDWUhwROirfPsbRpYMf0E9G',
'1Go2YzQ2Gfsu87gY6ur_ztO_eL-QLX8va',
'1a9GiR56jbzAXbCEdaGro6MDbww0eBfab',
'1lXXEpMH-orT0TAzHueRwOJq-nusLiZRM',
'1Eirg4f6UmAWJEBsBE1cvUpjJE8CAgcnK',
'1RphRszbJ3EhVqZ65OYXIUQfmWBa7vKoA',
'1QiUF_XkZYGWK5_gYlyr9wA2GFQxWm65Q',
'1w_GiIC4Q09hTsorV5OpkPlMBkM1ORm7e',
'1Tal-kbUsx4ZzRYnK77SLLTquIiU18eTx',
'1F-3XPNdR_fxBNwBOevLPyQqzGrPoesek',
'1Bk5O3mVMjXSEgeL7QQAH5fV4hXmaC6K5',
'1M336jBzwraEcasD6qgrrHlLkvkwlc1MW',
'1lwyqUAuUe6qknzSRgn0svNrWgiUANxq0',
'1_yb2GIvhh2xfx8fu8MpJqIDEDqzGNCXb',
'1MtUBW0AqC5usy0K0IUIt0J9Eh0eyhN4i',
'1hDQ2qiW1z32s70YHtF1ypG0lQ627wSzY',
'1xPIM11e9sCG9ZNjxY61XIlWnCoxnFooA',
'1wexKcpAFVlQtXgfc24EWPVX7A7CCBEsw',
'1gubFDbq2JeCxkgGML9Bpe4CXnebkWadI',
'1QiJlApKteS3EIeG_rJxjSsIa-dmrhkw5',
'19o_2-dQEW8YRSpJgeLYpe03u7nyfmJ45',
'1fYflUwM_nWoJoV4EuQRKulN4DTzG_P7f',
'1cxlnAJXtV8m1lgZ_0WcoL_JK_qFpOm4n',
'1upZEvDH3M6LyAnt2nBT_5XoQ6xqXIFXN',
'1xzku5t00rtTwhukEjjzI6W3yYq8qGCMW',
'1N8XedkF2jJvaWqbhMRfxStUyLUqinvCV',
'1v0lhIcyd9WlW68oshU4_WAeZAp9_HPsL',
'1Svxu4QitLqsJ8BAKKTv5oqv6-LvXoMWF',
'1-2SOhl_Ee8hX-XK7XwKaJEuitTX8asni',
'1AHBRCZhhvInkgfYvaev98AlDRDeY68kq',
'1uELveTFTkEQgjj8lKsPqc6JVd5y_XnLG',
'1voG2-BKLGUIX6rCeJCcJ0h0YUQyCZF9v',
'1Ln3KANSljJHuo6onjSxIPLqQUyEd7VCQ',
'1HWA7eXm-pABuZkrFCywAs40bY2X2gZgp',
'1IgzjxYQ6Ly5UyZ87Yg4fR_5W8X_yZmzP',
'15Xcr1u31uULngLXtqg0-8Eu_Ss8NMwHs',
'1ooE8RYYghEYoxpciJdi50AXerAxSvxvP',
'1giozrPCZ1mnKhaqynegj0aI68P_1Tje_',
'1g5XMpOgh1rw0QYJGbZW1iWxAdyGRaG5J',
'1gtbzedCk5GDTdAxCG9593_eAaTI_97T8',
'1reueyiVESlUyMv0krZaklfQDZp0Sb-T3',
'1P7WA5CJ9lOcGM66Sj56-cAu3PwD4hIdZ',
'1Jp4iTkVAaoJP8JiTT09HLZJvgrYN_jYY',
'1EfSSpE6DTBhrgwIiDvbpDuMBYDo6S2iN',
'16Bj-HgZgPDT_9Sorh_F-RMcT2jjHzS6S',
'1ahcYoUEnTVqaih-pIrWae1msla2tuwdp',
'1_88yKIS0OqnU-kxC9NfBO96AmXZzsnV1',
'1Z1nkvJGLAaXaJFKzggNQdD9T6ST8jItw',
'1RSn1FO4_g-Nn_NExY2ZQFZrCYdMh4QEN',
'1hlCxla8Oo5nGck-kfVPcn-Prh231pbTl',
'16SOwpGuenj36nHvj0SXMZJ5o6menT1y2',
'1suhGIgs7dKu3jx_IM_bupLjm-5n93gA0',
'1ZD-oufY2WhfAnDSoIk3mPwPkYyckBZnY',
'1Syirtu8f7UJ8Ti8BZUgrtoBkHliaBWCX',
'1oi2rJdaqXw_wA8T_GB5IayK4tD_RSG0B',
'1Ry-abe9porTIQJAMOlBsA4hZbL3GT5PX',
'1AIxrvg7IK7HWscbgGhccAyU1RBbjx0DL',
'1pRnqPSh8r6EROwP-gC-bBLnX53l9wXQr',
'1M9ZyWc5RAomFMZaA6brTd0es4p0J0rcA',
'1KJ5Flqzy2IQ_A3Wf1dZKdOTYXrN_T7Xh',
'1VNur7wpgLS-k7TSruO8BUhIeUBEPEpVZ',
'1lHjLtCz9lUE3HxmFunSbk0-0l-vahQEw',
'1l9EKTuaUGGK55scUpajA42YDW4EXKpfH',
'13iPYTc1d_-aOApJbGCzkCkZX9ya62CqQ',
'1bT3wJmKNNRzwtptIZWvdFuZufidjuzCM',
'1X3TVXk_n_w3oXHGKJ_dT4o8lTZ_NsNN4',
'13PZ9zylcrTQ5k7oPBh8oJ3hSV9REeTc_',
'146iNaFw0PDy1Q4wnmvzcQeMBXJuW8its',
'1xDzOQNrOwWkJ9-_GJS4TMXOtJQes8bWr',
'1Eif06XSEGXNpzus09GdA3x6uyjjlzQZh',
'1lGgMQi9Jcn0lUdNsFQSN7I7CT-76XaTG',
'1Bi3YEVd_qwyHMre7ru88K_cxfGArU_nF',
'1QMD3kUhyGgzDndkkBtZwFDiDLQMfIEEr',
'16Ig7bnER7K92lGo525sP-JK3pEKm5iGF',
'13fHSqshfWr8Ap6ZkJS9Um5EJlO6utUui',
'1qpG3Or-5IFMAMW9LCkM9nlf3gB8hHid0',
'1TAL2oKDLF0JcV_HKmejgzwM3u8PtD0fe',
'13VBVnX_hN2q_E803E56icLWqduLEsup6',
'1hbouxxyxubHDTDfZpFJJ6bD62eV_htfR',
'1mM4ZSMj_t4ly-6jIasIbY4bVP27S00t4',
'1Z7Pyrsb1-nAh-W4KKPBmvJD34sgd5Ytx',
'1s4C_Ur1Pkbe-XoU7kTY_xBJ-C-rLuYed',
'1opE-6SbVHeePfuQM714WHcHQ5oHAJAih',
'1an2fa12tlM8Ulezt-yHyDUFxmIIuoOaY',
'1Ql7DPYNxX-CUiOGHJ3Ngyaic0-M5SaNi',
'1z-hQToFWAnYqRSzWbmZUiprx5nt9ddPP',
'1nbGDit19yyzDi3PnfWYJmBwznQe0VK61',
'12qRSaZowLxDdwI8dkZ2e1b7cSstuPWCP',
'1vLjvfLpKaxqLVH033qYsk8Ign-xlitV7',
'1HnAwl1HDRI7WqcvW162-4GOLrdTBKelc',
'1u-UUs8I0mJLkp5MaAEIz2-WpLTotCCEh',
'1m3TfHbpNZKdZO140TGVNUIrsb7MuzMYN',
'1HKSceoGFP6ncpabKw2MqHCpj4E1yPtS6',
'18470zDuCqnOo4uaPhjr9K1WjihbwgD0t',
'1LNW1aXDJfGtJ72YpC7LqoUpX56y7AaWY',
'1tgfnFBThhM9f2wMcCqevAZL-JSiSEvoF',
'13Vernx1u21FRWFEnUl5xBZNf4LoSVd6M',
'1AD4SnE6lQGS8WXquGPwnqg6QimjZNc_B',
'1kK_OyoR9c9vAHIO5x1a-aPO0xvVngpZ-',
'10mqxaUItXMCKghbD3P7XZQMuTJVy_GpN',
'15FtJtsD3alSShJT-oiPeA5ELB1YzpGYe',
'1FyvHS23x6YOriGF8ZXp7INjbQXlVVYZe',
'1RKB3KvGZ0Azb-x0zlIB29upkOq-H1igk',
'1OVMdQHt4hQvdH8XGYwZtl_yzSe2o1CaF',
'1uHPXikIMKHi0Z3TwbWRMvyn6fi6TePTE',
'1R6UkFrF9voW8DHUmH3rBYkEFmwWzVt-v',
'1Jg9yHJdOREmJfDtnwjq5ao4CYOxmnbXz',
'1MtnN3H2kw2BGANRziO_RcrwLy7aiJxdY',
'1gGW4FmGmtv9e-PrjNoIYjMxDvPE3GJO7',
'1y_EYs6qNkoYPlqvhadrohrVTCiTnHDP1',
'1hxNiMfqx19SHm9pTiLCN9eGYZcYqY0vc',
'1_PD7G7gU8Ha3YiODnWC6pfMI29mUU4tD',
'1ysfnIEJ9V3shu0EaXVY17-VlPDBXn8JP',
'1YzsZMJqe7VaqjfIVk9RymUUg_UtbKVCH',
'14il2DXgVahzu78VYbPupV9aK71dsBtqV',
'1a1n5mrocEOpfHwfaCxbjLY9GLxtMvuu7',
'1qGcxqRwBFbuDdAobYLSmV5FddZdAH3sN',
'1hB2KXcYg_J35jwtlW0kqI_RTtT60z4HJ',
'12sMHDIGkIWsG8KWWvX8cWHE-GNQmwzpR',
'1SrUpyYe-h926kchcU-_Um7VRE0u7md4c',
'1O1wOCVK66Cak7X4V7KwS4pnAXk6Rq3pu',
'1yWGr6yQdlTLH3AxmGeLadTDieemT3phw',
'1g26fWTz2FcV1XiiQk2hjDaVYX5Q_p8WV',
'1ztYxfF9eYBi_vveBF5IJPbgCrgdK0vSl',
'1_SuQg_OlEcxyOWyjplkcC2yaaWBmIXzp',
'1L2i0K40SkWIcdq7SGKPbqETdyCXKTMnJ',
'1wKL_fl8ceDAqx7kuaQ3PTHfeMcRTN4d8',
'1OslHv8tG6Y-xiKtrPUmwcw2f_WvMXW0P',
'1my3KTTmxA3NP9_MqZYD-XVhBSGlIHNdd',
'1vGGySdIRzynhBOYwuwWOTE_3JTw7qlK_',
'1mpbg34otAfBu1P66TXxRn6h_C4n2S7fk',
'1_O1KX5LV2h6JCzClAYytZZYWOylDtWs2',
'1F051IzsedT_8uXhTdXJbdUFKJs_FA_B6',
'132vYGjOZTaYuS5UZIwKCxP0Z1wv935Mz',
'1EdaLOGr5mlPDmQXbkAVza1xbHJYcny_m',
'1VPe4gDcI6k75V3z6FjNNmyfgzcXiw4cl',
'1_Y3KmmRC13LhWHHXEbR299xuE4moK83e',
'1rJ5r0vEvHrV3g8p6gdOs9HxelHuJQXdI',
'1eCkeFJO7KnrxhCvUSUTMLv3b_6tU_Peb',
'1ELAUv0LnV2FVY3ak4rGmibSs4fcw3QGj',
'1GAKDrQJEq_PUDZHMn3hM6lhlrY58O-Yu',
'1jS2C6a5mXF1YP89ns4WrnJq1GjQufoM3',
'1Yjwv-JaRpnjWbaegaSv9-4rvq9ExClDO',
'1Uhb-oK5RINqnWSSK9jEd_z4V4N9ahMw3',
'1ChO63jnDiTLS4mt--4AvjgxBOJuVQfYx',
'1FUb9yO7OO6x4knUOHD_l3YYH06GO8TVR',
'1L93X4RZEL3_H35Nl5fV3w1J1YvwoK8HG',
'1qC-QtW0KrVlmwTsQGF6d0v9Qin2yINJZ',
'1x2ySIYwQHs7S-pvaL6bzErGnjU_z3hzE',
'19wCVGTXF5oWnHqvGdyPrcxOiNVZ6hbl0',
'19m9-wh3hPts-O6gx6X9TAVXijImIEWC4',
'1Rgy21yhw_-9M3SKtRKJhgKQ70BAlT8KF',
'151zWuu1yuxmMSdgscmgTfzyMIgcqarRf',
'134TISigPsKZl1qFW8sRKhGeWY42kmSpQ',
'1LKm9LchMWNBzhBnT1S9HzsjpEx7AjKSh',
'1DuQdPXc-qgy1Rpj8cUh4bp1uNYONVdMJ',
'1U-Fj-_GpWFEbqktqiwvTeXJH79wSGN3G',
'1cCIp0pWRV70c0fbDxQqvIUh4MQ3QFK4U',
'1IBIK4DGHlCsMujUEfajAL3EZRQenDaHd',
'13tlNexZAWNs3eBmujI_RyRzX2oyWYYER',
'1HB5-JqrRo00zHLJsOQjV6dRynvlc-NvA',
'10u5CxJhuc94aw7nooGwfaUxhe1-es6Kh',
'17Ro56nE5q5yNEO6IHV1sb8Dz3hHLaYQE',
'1mFqPplFy_rWTvihyLWaekhd3GrQG7jl4',
'1c9PIkDvtDGnW87tm3Py8MTwVJx2nyR9Z',
'1pORAwUcVJPKc62MIW0Mva3PXazA83gVr',
'1e4DWlrpmNShk6Y22zXxIPlAlCZXZ6L21',
'1vtpUMTRbHgmw5f-qIIO6j80y6NvOTH5M',
'1_uZfmp0nKqxK-520TJpxkGI_BAmvQ8kL',
'1r-pd5V3QbEd0tl_1uk-euAy5mkgroBFH',
'1jsyGbJo8GaKpqHuWxB4aByFcjE-S7cAs',
'1aENodzsecTmVgoVZx3Me2iopENRLDsZ4',
'1HJ8se7LXmDKimvL97w9MeSY4wCof_jg1',
'189_Ca9mwQCm6Q_AEhgDq1RzXNoC3rpR-',
'1NEn1XvdCDKwwFNFdbe_KzQ8nOCdE64D4',
'1VYV9szGqC5prsd6UmPbdrLC5JTrxkGBj',
'1-Jm9mHUcPv9mef1AQ43JVGP2F1ydDm82',
'128ZmbWKEk0PzEmxF3UpitCu1HtNNqeu2',
'1wiEChPzhyOri4dkV1Uy5E_F75-o2qOgF',
'1D8B-lKAMsNNfXsFr_eUuIEJgOKvu4nT4',
'16bm0EO-QRISE2PMs39mVSDTZm11gt69C',
'1zTUhji-q2eyVcsfOERs8fpfZSWsFykCF',
'1liH-Rw6d3Ry1EaD4NQBrd8j1HFxsP6Ou',
'1jylQ7-t1xsxjeg8G7zU6xgEAAI_NHfCa',
'1WI76k0R_hTdYlAJDBeHrYsH6Q5bqUUeX',
'1z-hQToFWAnYqRSzWbmZUiprx5nt9ddPP',
'1nbGDit19yyzDi3PnfWYJmBwznQe0VK61',
'12qRSaZowLxDdwI8dkZ2e1b7cSstuPWCP',
'1vLjvfLpKaxqLVH033qYsk8Ign-xlitV7',
'1HnAwl1HDRI7WqcvW162-4GOLrdTBKelc',
'1u-UUs8I0mJLkp5MaAEIz2-WpLTotCCEh',
'1m3TfHbpNZKdZO140TGVNUIrsb7MuzMYN',
'1HKSceoGFP6ncpabKw2MqHCpj4E1yPtS6',
'18470zDuCqnOo4uaPhjr9K1WjihbwgD0t',
'1LNW1aXDJfGtJ72YpC7LqoUpX56y7AaWY',
'1tgfnFBThhM9f2wMcCqevAZL-JSiSEvoF',
'13Vernx1u21FRWFEnUl5xBZNf4LoSVd6M',
'1AD4SnE6lQGS8WXquGPwnqg6QimjZNc_B',
'1kK_OyoR9c9vAHIO5x1a-aPO0xvVngpZ-',
'10mqxaUItXMCKghbD3P7XZQMuTJVy_GpN',
'15FtJtsD3alSShJT-oiPeA5ELB1YzpGYe',
'1FyvHS23x6YOriGF8ZXp7INjbQXlVVYZe',
'1RKB3KvGZ0Azb-x0zlIB29upkOq-H1igk',
'1OVMdQHt4hQvdH8XGYwZtl_yzSe2o1CaF',
'1uHPXikIMKHi0Z3TwbWRMvyn6fi6TePTE',
'1R6UkFrF9voW8DHUmH3rBYkEFmwWzVt-v',
'1Jg9yHJdOREmJfDtnwjq5ao4CYOxmnbXz',
'1MtnN3H2kw2BGANRziO_RcrwLy7aiJxdY',
'1gGW4FmGmtv9e-PrjNoIYjMxDvPE3GJO7',
'1y_EYs6qNkoYPlqvhadrohrVTCiTnHDP1',
'1hxNiMfqx19SHm9pTiLCN9eGYZcYqY0vc',
'1_PD7G7gU8Ha3YiODnWC6pfMI29mUU4tD',
'1ysfnIEJ9V3shu0EaXVY17-VlPDBXn8JP',
'1YzsZMJqe7VaqjfIVk9RymUUg_UtbKVCH',
'14il2DXgVahzu78VYbPupV9aK71dsBtqV',
'1a1n5mrocEOpfHwfaCxbjLY9GLxtMvuu7',
'1qGcxqRwBFbuDdAobYLSmV5FddZdAH3sN',
'1hB2KXcYg_J35jwtlW0kqI_RTtT60z4HJ',
'12sMHDIGkIWsG8KWWvX8cWHE-GNQmwzpR',
'1SrUpyYe-h926kchcU-_Um7VRE0u7md4c',
'1O1wOCVK66Cak7X4V7KwS4pnAXk6Rq3pu',
'1yWGr6yQdlTLH3AxmGeLadTDieemT3phw',
'1g26fWTz2FcV1XiiQk2hjDaVYX5Q_p8WV',
'1ztYxfF9eYBi_vveBF5IJPbgCrgdK0vSl',
'1_SuQg_OlEcxyOWyjplkcC2yaaWBmIXzp',
'1L2i0K40SkWIcdq7SGKPbqETdyCXKTMnJ',
'1wKL_fl8ceDAqx7kuaQ3PTHfeMcRTN4d8',
'1OslHv8tG6Y-xiKtrPUmwcw2f_WvMXW0P',
'1my3KTTmxA3NP9_MqZYD-XVhBSGlIHNdd',
'1vGGySdIRzynhBOYwuwWOTE_3JTw7qlK_',
'1mpbg34otAfBu1P66TXxRn6h_C4n2S7fk',
'1_O1KX5LV2h6JCzClAYytZZYWOylDtWs2',
'1F051IzsedT_8uXhTdXJbdUFKJs_FA_B6',
'132vYGjOZTaYuS5UZIwKCxP0Z1wv935Mz',
'1EdaLOGr5mlPDmQXbkAVza1xbHJYcny_m',
'1VPe4gDcI6k75V3z6FjNNmyfgzcXiw4cl',
'1_Y3KmmRC13LhWHHXEbR299xuE4moK83e',
'1rJ5r0vEvHrV3g8p6gdOs9HxelHuJQXdI',
'1eCkeFJO7KnrxhCvUSUTMLv3b_6tU_Peb',
'1ELAUv0LnV2FVY3ak4rGmibSs4fcw3QGj',
'1GAKDrQJEq_PUDZHMn3hM6lhlrY58O-Yu',
'1jS2C6a5mXF1YP89ns4WrnJq1GjQufoM3',
'1Yjwv-JaRpnjWbaegaSv9-4rvq9ExClDO',
'1Uhb-oK5RINqnWSSK9jEd_z4V4N9ahMw3',
'1ChO63jnDiTLS4mt--4AvjgxBOJuVQfYx',
'1FUb9yO7OO6x4knUOHD_l3YYH06GO8TVR',
'1L93X4RZEL3_H35Nl5fV3w1J1YvwoK8HG',
'1qC-QtW0KrVlmwTsQGF6d0v9Qin2yINJZ',
'1x2ySIYwQHs7S-pvaL6bzErGnjU_z3hzE',
'19wCVGTXF5oWnHqvGdyPrcxOiNVZ6hbl0',
'19m9-wh3hPts-O6gx6X9TAVXijImIEWC4',
'1Rgy21yhw_-9M3SKtRKJhgKQ70BAlT8KF',
'151zWuu1yuxmMSdgscmgTfzyMIgcqarRf',
'134TISigPsKZl1qFW8sRKhGeWY42kmSpQ',
'1LKm9LchMWNBzhBnT1S9HzsjpEx7AjKSh',
'1DuQdPXc-qgy1Rpj8cUh4bp1uNYONVdMJ',
'1U-Fj-_GpWFEbqktqiwvTeXJH79wSGN3G',
'1cCIp0pWRV70c0fbDxQqvIUh4MQ3QFK4U',
'1IBIK4DGHlCsMujUEfajAL3EZRQenDaHd',
'13tlNexZAWNs3eBmujI_RyRzX2oyWYYER',
'1HB5-JqrRo00zHLJsOQjV6dRynvlc-NvA',
'10u5CxJhuc94aw7nooGwfaUxhe1-es6Kh',
'17Ro56nE5q5yNEO6IHV1sb8Dz3hHLaYQE',
'1mFqPplFy_rWTvihyLWaekhd3GrQG7jl4',
'1c9PIkDvtDGnW87tm3Py8MTwVJx2nyR9Z',
'1pORAwUcVJPKc62MIW0Mva3PXazA83gVr',
'1e4DWlrpmNShk6Y22zXxIPlAlCZXZ6L21',
'1vtpUMTRbHgmw5f-qIIO6j80y6NvOTH5M',
'1_uZfmp0nKqxK-520TJpxkGI_BAmvQ8kL',
'1r-pd5V3QbEd0tl_1uk-euAy5mkgroBFH',
'1jsyGbJo8GaKpqHuWxB4aByFcjE-S7cAs',
'1aENodzsecTmVgoVZx3Me2iopENRLDsZ4',
'1HJ8se7LXmDKimvL97w9MeSY4wCof_jg1',
'189_Ca9mwQCm6Q_AEhgDq1RzXNoC3rpR-',
'1NEn1XvdCDKwwFNFdbe_KzQ8nOCdE64D4',
'1VYV9szGqC5prsd6UmPbdrLC5JTrxkGBj',
'1-Jm9mHUcPv9mef1AQ43JVGP2F1ydDm82',
'128ZmbWKEk0PzEmxF3UpitCu1HtNNqeu2',
'1wiEChPzhyOri4dkV1Uy5E_F75-o2qOgF',
'1D8B-lKAMsNNfXsFr_eUuIEJgOKvu4nT4',
'16bm0EO-QRISE2PMs39mVSDTZm11gt69C',
'1zTUhji-q2eyVcsfOERs8fpfZSWsFykCF',
'1liH-Rw6d3Ry1EaD4NQBrd8j1HFxsP6Ou',
'1jylQ7-t1xsxjeg8G7zU6xgEAAI_NHfCa',
'1KRBGwjLsALhImoYEI1SKmuLVCXCzEG7x',
'1kT5WfQiCGH4_GekDpWXPEJzBUEfhQaeF',
'15wixhufGaapjqA-KekeWYhuntXUyirdz',
'1TzomNOExVRi2A85wy0PYcKfhLhNOu00s',
'1MCNAmrNWVhfhvxgCPM6gGkq5iQowS-1x',
'1BVk_4qo7eaGcTYJJt4CDopYCwandNIwI',
'1GDs9dIffOLxHX8mxLTOZkubudWSOVcRA',
'1tvZ8M6I-DFuLlrrHIdH_MkpQKvy10P6J',
'11wm5aMgwIbhKAqAn-27xA5hi_jSl2oxa',
'1XzDD99ofuKpVGVVMikpN39LZFhW5mmsn',
'1zOFQ6ps6iwx3Bm3zd8FjNuObLBYXxpCP',
'1Atol47LueXyjycRvLbfM4xJGYr2AlZwp',
'14RASoVpzlVkjVDtM-ldTB1_egi9AQ455',
'1spp6BvEAmXH96M220b-bQa0A7xqknBAa',
'1Dabj5CiWzVFwwSas93v2h33ZkySJP3XD',
'1eLsFeJ2l2CjPd7W0JDZlPOSt7XM0HCXS',
'1EsrgQizdnjJDAG0V1mlqgkSkwHj5u4XJ',
'1B49aqs3RBQ_YYz5pE8C7iMqNxvdwCAem',
'1QXGiPnqgh2rlSTCr0DkMIAZsEP2tvPvs',
'1EWkkoW1MlAE9rFTctBiSxzqPGKAvRiMS',
'1hsAlYyg-NbjBPTKeWPYJVgBHrpEWqsJZ',
'1KW10ZYloK7w_o21-8Odf22mtbCM2e3I8',
'1rqoOaTLmof-bl8xdxuKqCcXzKJ-Rj8re',
'15GfskL1vGjXx_p94b6zQ3cTxnPqNODgg',
'1bD0VwQP2eCfcOfjx_Opmj4DFUkQyATDe',
'1_pwHGHwc82J7ldFheu5m3No2VRebxqsc',
'1ABF-tyit1b0yjqWGb8rw_YWtb15ziyk7',
'1n8anZvivqTkp4VLwc7mrdavRUohFMah1',
'18jZdK-43wq0LtmUbLuY3u2lRiZuOaTgr',
'1qviYMx9HlMhkqdJlAXSorj9oJJxHRw8a',
'1U0SmWfIBANe7AVUS0ya9pUSalwX9eniZ',
'1rg161OfV8-dt0eNa5JYMGGQsno7UtzX0',
'1URniH_wVWcgVlVu5Y8p1ISZK_xalZzCd',
'14Vqx4OdpcG1QvZIAW31P-LWE-o4zZoXZ',
'1k3a-mk5HGrd7qosETkGNXLjrQ98LT721',
'1EKU0fRW609LPHD7gM0pu_Z4sV-LzhT-K',
'1yoUxxLEatlt76hXUeLSdGVGD5Hbezz32',
'1q2yM_B1CN5xtwUDBPH4K4aOAKh4yKOx0',
'1TKCIFE7zQjLhQwOBTS8jW_I6npIJZJd5',
'1yzdRwddR5sUzMZsOD9xikaokCEDXno_S',
'1X-2tKW4XnMGrE8ii_4ntw8W6UMmF231o',
'1K-GqiJVnzNk9wZhpe3KpFFng_OaN4WZX',
'1-PZyISv49q5VZmOGVcu7p2Hawdms3uNY',
'1Bt8fNHqKYnfsxL8il2nGMS8ow1Y86Hfi',
'1Q1NfBY_iRVorWe35v5iZEGAKwtx_Ps1U',
'1khrvqkwhHhZWHEJy9FjFsWjBOt_evqz-',
'1JfLqbYGn23DQIsx8X6aYGjyrT_POtMUz',
'15-J3LeGqN2No7jHptHIn59kLfWpe8J_1',
'1mhrhNHa1dhTiF68w3yyGdLoKE_oKMtxi',
'1ZrboDVR-QomgIIjv4sai2jkUfyOByUA5',
'1LUrGfW6qwXwtlcpQrEITLvfJVuKARTeU',
'1_nhvzCM1jEWMBMZFoCrbVoN9PRSbFFrl'



];

const generateDynamicEl = (ids: string[]) => {
    return ids.map(id => ({
        src: `https://drive.google.com/thumbnail?id=${id}&sz=w1000`,
        responsive: `https://drive.google.com/thumbnail?id=${id}&sz=w1000`,
        thumb: `https://drive.google.com/thumbnail?id=${id}&sz=w100`,
        subHtml: `Image ${id}`,
    }));
};

export const PHaldi: FC = () => {
    const lightGalleryRef = useRef<ILightGallery | null>(null);
    const containerRef = useRef<HTMLDivElement | null>(null);
    const [galleryContainer, setGalleryContainer] = useState<HTMLDivElement | null>(null);

    const onInit = useCallback((detail: { instance: ILightGallery }) => {
        if (detail) {
            lightGalleryRef.current = detail.instance;
            lightGalleryRef.current.openGallery();
        }
    }, []);

    useEffect(() => {
        if (containerRef.current) {
            setGalleryContainer(containerRef.current);
        }
    }, []);

    return (
        <div className="App">
            <div style={{ height: '800px' }} ref={containerRef}></div>
            <LightGallery
                container={galleryContainer || undefined}
                onInit={onInit}
                plugins={[lgZoom, lgThumbnail]}
                dynamic={true}
                dynamicEl={generateDynamicEl(imageIds)}
            />
        </div>
    );
};

export default PHaldi;