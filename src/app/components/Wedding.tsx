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
    '1gEVuhMIhfrvUV76OfvqoL2dOnm4Hge4X',
    '10k1aGGHxcK77drky3UmYkwf8coS-hZfe',
    '1FTIm9-v8Fs_lpCW2lNf-XocenzdavkHk',
    '1rPYiLSWohflbnmETl56IGwiirjv2YRB9',
    '1AaOs7Xarpn9pfb_7__ghg7kJCSozM_ET',
    '1uop97hrwIsYItwGxvQun3ey6wLXI4PSu',
    '1AvCi81QKSYfuyv2Lhw0dHMfWwRQVPDil',
    '1VS8qG1Y3JH9t21tY9WljwrH5NgKeBo9_',
'1SDHyVIKhkBsL9WRSb_KvgS4-s7_j9atJ',
'18NjUsN9TYoj9GTIIWTffyRbmqR6Pyqml',
'1ia0NIBXUDeeG0gn2lv4kWk4oVQDK-Cgo',
'1tWh_IHsILwejg8Qf-h9f5S5xlVRWwvEb',
'1-JemeTllUa1nI8x1rwBX_kYt44UULRhP',
'1T43tC0xIuLcTVQGQytsLMQodll007QYF',
'1WtQxtZgvCCbue3J0Aq1lsc3UrTCu4R9D',
'1s4w_VykjqWZnHdSOsdRS8Hc5DSgpuP6J',
'1aYhA9wL5GpmK134NjZoZp3uDVcVgxXWt',
'1ngV6oIqoC11YCEE9SuBIefFwgROV20kv',
'1Ckk2e3q7M5yj0eDm_MOzjkavhuvi3Wwn',
'1o8fOydT4yGdUjkfj0sMk4lx2GqRAH5un',
'1CSfyqebLjxkYWhBkoeS2sOHV35f_4vh-',
'1tscQAOhsoVkPgIKzuqoyCCuZy1PUJ5Q4',
'1WMagycOBGNOIk2-coOCSRcrC-o07lNzG',
'13XSce1TGFKRyGc5EynFtjgzH7ETo98Ii',
'1hmB9dN7r9O3gwjppoaUWMRY2gCHxirgf',
'1_qQPV2mtfkEoAWSMTCOxDgPXPWbfMxn3',
'1EUnfJYHzlGzuZf01Zsr7hN0tDeAaCImo',
'1Et1sGinCmX9rePITOf8gH5QjwFhLVPWc',
'1YsDwHGgT2mCnd8YQLUOrImxpkZa0h-Hm',
'1164C9MWSq8xdbh59CVLVugJe-k9vHpYh',
'1VMQsleLiOb9m_y6hWkyEY3WVlYg3PUov',
'1RRdgP-1IJz5PTzpNh6_51MijCKRrd3b5',
'1tXJzqYvWFxwsuHJGQlbwWqH4tSAiHe2e',
'1fHKymE9wLXEaNHWSuWTa7Jk5r6gFRnnv',
'14c-j3PeSOX6wa7BkXGxU-wGKSc5mF_wg',
'1LvyWlo-iUJddYZPQyldrDCPaAGRHAdcf',
'1pYqftuLU2QV6U7BfZYbePmADOa4BlsZ9',
'12nKkqKVIRReDeMefdOB0sa__Tn0877cW',
'1wyKd8Ko5PW0XULiQPp3xKqJXpQ_IYqv6',
'1vGuXAGAJwoKErBQINcMZQugh7hvpbhrg',
'1MjYCWlXPEOOoHLrUz8-ciWE1qSYEX6hx',
'1R5P5EsiBwAMkG2MIfk1FCN9FNznc6O3j',
'1Ks99JjgSNlNRFR3pubRLCqCXOhvFE9rY',
'1MBom7QGHTuuery_maD1Ag3CbahabUWJ9',
'1LAaN1pDa8Y1_YHRdSqHYP_yfdDivYMvx',
'1OKSAAIu4-6LBqUq8b0HXDxCY_WTGbCMJ',
'14_zNM9agGCRue3dV9Leu9ktuPt-xH3Co',
'1rluJSr8Yl7-wgEFvE_oREB8UOY3m_vct',
'1MMa7b7grVIs5QWvgC_j5yfPAfHbkTZsD',
'1LIOSKm2UMPlgdB74_YDbgwoLAfxfoJGi',
'1w_P3VrkaQfn7V7qupzgZrrq3Z1PMakrr',
'1mUD4LL5iICPGl6UJZ6AKHMLOxKIl44v9',
'168fsssje3viNZecIJOWOxu0Kdf7fvZmC',
'128c_tJ7QXLaV7gw4XENE-ssKb0w7bB51',
'1zZfwIqYPFIsKVahcz7QsYcef_luNvce3',
'15a4HzNvySaChTkxPB-YjyL_XH9yGKrVT',
'1YxFVGS9AflZX4cx900Ok9nTLqnIBXCNA',
'1tFK5IfU23nz9RzZxoOh5UcP_wgnl057a',
'1MAJz2KGx9pa70F1OUlfCxXHexTO9VYqn',
'19M7xsKXg6GR0oFMd5ZLXppxiKBtcTvDd',
'1XqX6mOruXMeZ1Q6jTNxlunB5jdXbzKdg',
'1bEindr1EO2i_s5B_4XhMK7zRPawdslh9',
'1M3Oi9xVHbnvEb2zgRra4B-xZys-LCUM0',
'1H9yQ0TKCHO39u_2QDlucXKfcKH8bbwKK',
'1wpwgcD7gDvbvdo0dNR5CnOmFTh7114GE',
'1IhYo8gdaLds4rDVlwBm3On_5QbKhiYwY',
'1bEK9-e5M1_DeIeE5_yxe7_Sj2nE4Kyh1',
'1aRgLUH_VsGHBMizl7hd72EUxTD-VL4Ib',
'1jmxBPvXMDC2WFor_4f0FzXEQWn3PChmZ',
'1sVzLFI5Q0ptkSdeLFWqMwW6t5IR0rWjx',
'1RSP7eY18ApdnNn_eraeANQdm6LX3GxNY',
'10kc-3L_3ffUxLsgs-GQEcbfHhDNLh6Db',
'12_W99X70dq4VWUE7BRughgZS90MmSBBC',
'1h9rEKqWLGM48TH4Z9Zu6vCnuc14vWV95',
'1IPp_4ls2E-kp3E_Z7YHtmskoIMRbb7li',
'1kLK7_UYSyEJQ9RWH7kFHu6IyfP5QVdP5',
'1gCPT9rC_77vHd_7c9mJzTfmgNDwgE4MT',
'1-uIPc3pI1YBuHT-0AQRRJ_OEe7Qrc6vs',
'1-x98fdGsW5QSVVheSal-HbeycKmIOo2c',
'1KZ6tgyMRMZ6haMJeKkrzvAMiCYz8ac5N',
'1-lG6CI1uNiL0u5f4uL4c9DaiUgeVHii2',
'1sobLqZ7tuhI8NasTn13wE3gFQgRQaGgh',
'1Ona37_87fZ-02mnNgiDgmJ_Sj76kvVtR',
'1ZmkHSAQEaWQwRAcZMXS0ew5wu3reUTJ9',
'14YHTTjeE4hqIMTLdHyEQn6ECT9ctBRlQ',
'1-U3uPmDsjm14jUsuM9ULE5Cqtd3Qfbzg',
'1tHPjEhEZgmUgk3Y0Q7-gbhocNUxusSfn',
'1AYMCrAcL_RTRQmtN1zziatjQ41WZ8v8s',
'1SlkWpgeanwfqe4UPa-fhCoF49rhyDVoO',
'1xcp6MHcBBwCbl9HAD7yv2Hva7emZD9Kl',
'1RxVkYolG4hbhglpqq-EB6-cPhiAfDIjn',
'1JGi9xcY65ue_cz6V4jZxMfT9pTZDI-jQ',
'10IBYgyV1O3WV9zoQAxmQE5V6mIMFOZLr',
'1mQnEbF3SVmzu0rMvYlySaYtGM-KdCKFN',
'1kxzSP6gzevy5DCr7DcU6OrdpfRMxLF31',
'1sC29bJYlJrjl8TVTTOVbnhuoyA07kIZ0',
'14ZY68vyo1Nxs2Xvjr07aK-vUIatFyNWz',
'1kQH3B15gb_6qwB0RfpcpjiGThZDza-vx',
'18eC_v-TGlf8RfX4wBx-9Jko2ZI0UDXju',
'1EZb1H8cdW-IKKBgQaTj_JCW36Rlxx6Ye',
'1OYfDHyKhgN1ZVMZfmTyaOXhWssxzgoBy',
'1U59EMEJh2KEZCzBo2mJpqJqmT-McADvW',
'1Ec_92aNuJD6LUzd0EvdZrb-grdwvjOEf',
'1vta2N4RmTLMpu6Q2Y497GUnTuXm-vj05',
'14t86nT3ttD4ZZbEADy8POMzffE7Ozh01',
'1U9VmiXg68XsQjb_Xjgkh3df-ucv9DtB_',
'1nRrE1cjo-bqWoYKBONnE4B_7thOm_Rvq',
'17t4xHfa9gIjzLc4ub8To86i3TJPpc47m',
'1s-ad_DQDYL8GawC2RwhFzENGBcdluWUa',
'1H-H7qbuYhsmcrj3RITrRXW3pVdQhx5G-',
'1ITOWSgP3E33WBiytYTY3w52wyRfw9Bij',
'1uZ3nQ2RCCCYwDgN7WPgR2EZ5ylXcnvQK',
'1SikDY3cbUhvJ891zHhZHUtekLG6lIcSG',
'1isrNuzp6d-DmrxfXEwWD-Tgtfy4EcXAq',
'1avhYq4QnfNmTzdFj9Lzx4Q4NLpjh8cIE',
'1AykWlpanpJsas5LjESOjOKMRJcDO-ovS',
'1G_O6Ec6t1PdYADZabVSwILMwbkIZbLpZ',
'19gXkXuElgq-f-yyUIqeIBa3zNGXSbwXm',
'1Tdef734VJn91ECh0WSJyd8Uzc1iP5Lst',
'1BEIHZ3hb-rqOtI1uy442G99PFvkIX7Qb',
'1y9gzcOvdM4azIWuszPk-FWK_e2voi3DL',
'1GIkCFWbfoFZAqImfomnP41CkdXc7o-Rw',
'1Zs1Nvdlhqq1ndoUCgMk0pAQWXbNJuHrG',
'1jO49DJ5WPaGpkMGy2v11n8Zgf3MgcN4O',
'1xRivnkNgR_rrNVFGO_ad1-ls83XvS44A',
'1o43Au2uHSfz6Nw1dl-Gwf3u16_HQQe91',
'1WlPDHVq1fbspGixb-YuWfukEGiAdLkmD',
'1jMKSMgAFr-NWMMa1IjPoWTEGN16fsdTP',
'1at7WoYNbfrJM_Rri4uCLPsZO-wr1GCaR',
'1R5UG3c8zfq9_NlkokZLdJlMHNJhhmMEW',
'1O0bj8Z1ZUT7foJf8sbZnWkHd7xvnCHAK',
'1fG3FhsrU7egZ91AT_Wot0UoYPKj0636_',
'10_1zOQ1KLsgtn017zFHVEgsGglRsReL-',
'1YXXKy9wOmBLpELKiRxLagsqCq7Do35nR',
'1GUWG-nYIdN676L8KUFoutvOGh1IcNdZd',
'1XnwKa3cuW6uwaeo2ivfu68wKufV0PNkY',
'16UXgCMzYkz88K2KWxtVAWC3WlDXvWy5G',
'1x0cKzVXla7TM3zrL7Ngwfz4xcdrie39Y',
'1jvmhYGurbcuDa_wm-2LVbpUONts17L_O',
'1FLXEmgQgMaPjNqA44puTM9Jvl8WjJaoK',
'1h_zeag9tXVppRpxbyEpbulje7i6ocl3E',
'1IqbQXOM01_eD7JLAu2NGMgUUG52cF5RH',
'1l5HsD-tKtCcCSXtZjLS_ezk_auKfDCnx',
'1YlaSmbR5Blq8e8LEBa5mTwxgfmgaT1hS',
'1I4yhPruDoe7D9Xrywanbqy9JGAWGVTkl',
'1X5SIQoloNPJAjChEv1C-TDMrQrOlYBGE',
'154lmwvesx1ch4tLYFd1qh_nthnF2TzBR',
'1EvlHj2-3fQ7Hj03CaoR7L80S0jPyP1Jk',
'1UKN3HkIhkUpZybwO525IRS0j3eLbDiNk',
'1GP1G2c5NnuCddsRN0w6_DkVqBzunF-o2',
'1joF6FZdN4djdPniyEXP_vvXrmWLYmyk0',
'1EF0ieXIeLIGPQ7fjT1TD0xU6dOdV5-HQ',
'1Tv-IAxyNd7ybqmzJqHN-Ap0ks4PMBQBm',
'1OTwYyDKmepI98JP0d_0FZlksFVePTozq',
'1VAlZ4lXN0BDamArvJu_sx5KHxpCIAGcn',
'1X2JJ5BRFILqED6nNug8ql84E_wfYLABU',
'1-Dl1LGsi6PN8eG17IxkAsalOjZX4Vu55',
'1h2PVdG8lAvikSg_w-T9kXe46REpipFRr',
'16BWu-B8kpnm87Gs51XJQOZZP9O4eGo88',
'1CNOLRl5jCTXMT1JBcJXK2zfA0c793lqk',
'1wkmtuq0nD-qNhhV1o2HMRz_LD4P4uYnF',
'1XEq8iOur8ndzHi7u3O8PPVVp4ZCHTJfH',
'1dX7IlChOSSNAqOkDWIRfyM2e7J4fWaI0',
'1tDPwimwArbSXBr5zfr6wcaRKOTMFP8M5',
'1LbGW6ICiYgV1A0XCP_LGpUBOvV0G3B9L',
'1Bv-_9_bytERQe7lWyAzUXuUlTV7VSmZO',
'1bDn6vVZjI9YJQrX3lqj53AmwLputpP5J',
'19cavPq-2aKZHGooNF0kpd-4qe19W-aoF',
'1-g6LXREyd7iwTB2NhdZC9bNnvIbfh-7l',
'1Ki5MtnuscI4JHyLe6oPyO48eCp889xjS',
'1wTaZ8szSk9B-P6k8WFcYpc3xBCijQqv1',
'1rawGv0K6klJUi5BSriHl3FfM7psce6UF',
'1_CneljPp3F1VBWA5A-gFyEFGdRHWzXuX',
'1RN9ItatY-vKHvnmuYhHGOXVE2MnrfCow',
'1_ufVPTM5vosq--gVMWoB0v4TDdeLhGIz',
'14sEnzXXz0jh8c5dQuxuiR2jdRyFCll0O',
'1_t1jzwrAzF8VROurVr5tPe1bno8ZITnE',
'1s7M4nMT1EfhYQodwRUypP5yLbyzYPbf8',
'1R41zEBkWETkFpe2eNQgutsp06HwuBf6M',
'139iIt7cOEI6jpKWT6PAcKPU8bhnXtiyw',
'1N9j025vGnL4iJ34AREEz5H9d6paq6pLL',
'110OxyQC8d3KAMIVxvbsL2BfSYahC42uG',
'11oRNbOH3UawgIS15zm1xPXye2f9zfhsw',
'1pGk2_Jcjqotf071azd5Cr4o8iw7RfXlz',
'19rv5Gcy14SuvROBMo1Tdw311FV7MOnKp',
'1N67CcwSILN7BXdNr78z5JM2BLC3y9TKx',
'1jgbCjL_HLvu6-bwManp4JHvxq7gcx08Y',
'1dp4V1BfWfkC_Fw2knxcPlvzd92bkUAVF',
'1N6zKZjz0Yx0X-bfaTDKcW60aWSnpKzTJ',
'14ZuYHhvRNzgZVYFXu0YjBKjIgcogoVh6',
'1T7vgWQLyYyvaxsEh4faE8dml1Y7_yWWz',
'1QdYyiBO4i1AwxVjc32PD7Uu6LVGNmz9m',
'1HfTz4xGu2MGLrcFuYT8y5Bh_7JgvzG7M',
'1e0k9n0JXnGXfR-HrXln4CaZvDbhHkkMx',
'11bEIXKHP0jX7amST4ue2OL6xdidrD8Ml',
'18gtfOhFgyZS3cq3rozhgj_ajwsPJI3Be',
'1RTtP8DMjpRaYASkQRNr4NmXJkHzbYA-5',
'15AP-YswwhqBCJzqw7dhg0a--LSDO_lN9',
'1e6fka0AS5gEWpyrjxJsVWYqdu3bjuluk',
'1e6fka0AS5gEWpyrjxJsVWYqdu3bjuluk',
'1KRGWqan-rJCtyABoEeIFCd_BhkT9uibk',
'14pCNi4lSnaOdjg84oqGo_DwrkwsuC6Kp',
'1vDpgQHBRpnmZyQgFrh-B2zROI1xUBI6i',
'1DBq8ThigDtTIibWrftlY0-XBsxNjvPwR',
'1tLdEVbBnaPJFpsDSuHENLwvRQsSY9HnG',
'19cUXkocGQ0P32VYJYwop9MPk__YxJjFx',
'1eOkA10mJsGmUtoy-od1bGJtu5f-x9lO5',
'1StA0Ggs-PX_IKtMzJM2U6DELu1HVC1mm',
'1u0CrsEoNItDLsjOoq2WjIPCcjENHAlcH',
'1ytIbJx_a6cPubkQJqmdi_EKqPkgzo3DK',
'1GpFUoDh2d6GKW-8w1meI2GTPVkJOo-qL',
'12y5ZWuwCtHg6R8zqE_e6SUp-K7NsR3ip',
'1gEhFcphdx4CIG0cUoSNebrY99ukxRdqk',
'17mgds-zWrv95iuiROdGgVIwzRcGnKya-',
'1d6SGlnralwb5gfDyDyZt8Z171-ADX5j2',
'1SJvAn-2u8YEJuBGampDWJf5a2sQMn-TN',
'16By4nR-tXUsvgYGiv-eRh_19KZptr83T',
'1hh-L51BKJUJNWWuwOjeQqHt0laHGPFna',
'1gUxzpPHVAsDCGeX9aHCTk3v5BhH5CDVD',
'1fWzoiwEpMeH-qXOTMk8smkLkVEnBbyTO',
'1A1nyqs3eyd6fW6TsV-w1NXkNevBzBef4',
'1tMV3lf71JpUK5Myy_pYuA46-xKHbOi6J',
'17SAJLNNcMeEFEf2w5OAAJ3Pwc45M0vhU',
'1LMYfUPRrqwBiZjQz_9_Pcb8d064Fa3B3',
'13YBOfUnD_Ee-AOBB8KY493EtBauHi6XI',
'1YWutYUScVmK5QShN1fxSX6Yy5MLbgr-V',
'1sQrl-fYvq6odQuwrg0oAuF10Dl81KTGX',
'1hXPg10tfGfoUdk8a5ec9X_9ArkoKlRvI',
'1Dx1nUrQ_JO2Q_LeD5r5Zib_oHQfB51Oo',
'1Ku4b2oZ-V1HW9QpDTabLyWZIsJ1j5EyK',
'1AN4zjutqVQNtBRLf9lnxFtaTaJ4YO6vA',
'19jwLmVoZR_yiarZKSsRQ88rNlS4eAI8I',
'1xo5B1jQrQ8zRUw9cVZaS5YvMpRhxLEAM',
'1ByLN_fQ4FgAUV22dRtUUvTNvxGVnyfLZ',
'1p6Cf89oprOwdS_6HIpNkRGTnlmYKb_M-',
'1cpACsGH80oNgHjdHBJ8km_Dn9277l_uu',
'1EYdtrb4d6sZcvS2BAyCmifbOyH0L8RYE',
'17YbDff3xzfzqzo5NE_o47I1b2KZacLXI',
'118ONbMKlcMn9rksUA-rJ28jePRy1BOhm',
'1vKfS3lw5O2q4OaLMybD1bWFVLdZyXtOR',
'13LMvADrwV_5mu7aL8BZ66jAOr2tTzRff',
'1ssNawZ3c8G7ZzAcaDHQTYCu3r9OgT7yB',
'10Y9fycGQd5OH3vquZMFrry4l1fgJKi5b',
'1AbF5ov79ekJXT6Z4cyLob_jQNAdxmP7L',
'1a12FHCykL_Wz3Yo-36_Q2V9uD0fS9tH3',
'1qBYyu6BeDM5V7sqiuCG-fc1XWGfzaHcF',
'1Fy6UwvZskKo5GjvgnzxHSFouxAq-2iYT',
'1aaY0FI1HQALAwDovJ6rtW0hztVqoPTrr',
'17jj-KwW3Yon9v-MtkVNJ4D0Rs9xlApOA',
'1hXqerhDtMjSZhgOI5WpIgZ5_JOeh5Q9h',
'1HuDK3Y4-Wq8ELBLN1vVeR8LgNjgxfDv5',
'1Eo_GsPqDu71olq9vJndQi6RAHCFlq5rU',
'1nO3ROFoOFyHILudar_46kqi8hxeH7IqB',
'1txk_mPmhGQIAWqpzlHinS4s12hWt6Qd1',
'1WA2DmMXD1SKWt7R4P2u5f6C25GODm14O',
'1-_yodI1VsJE4wJoCQju0e7tS6pVM-y9y',
'1X8F1t5AOkBHQXiQ0wqqyQ_4vhnQ7BkwH',
'1WjhfBr9_FRYJ7Jy4f5f0hSwGIy8dXju3',
'1381WM_GEFsoM8sVQS369CaCLS3eaX5Zv',
'1dB9yqLEnu7_bLaJ1Uvdq9bGic0xSP-n8',
'15f8sKpa__fxlsC0TTl-7_xrAFpjycuq5',
'1cyvbVdBoOGI8dMKGJMxaBJZq6DG1i0Eb',
'1hztOBSPOH0HlKU6VSgpER76u7Or0Z4LY',
'1nl3MUga5dstZatwjlW0iLgGghTEeh7fb',
'1QprpemQhqFZS38vIHsafzSysiTfGr9_E',
'1Yx282TQ8LN231LxWEDRakY7ivoeThvSf',
'1B37ZNq25avQRuHTpWrmheVMqqmtEVOlB',
'1KscJ5lzfulYDdyB0L6M563qgHwrA6MS4',
'1lDNZKfVePIQLs4XGJP1kFHaJnNqiLB-1',
'1X_iuIwAs2qynZGeajKvbX3maMS3jAChY',
'1z8lqz9IPt3coAs6xHh9iAhouvT4Q6Qt6',
'13D2R7_c08xTDvsVsMo0b753wLRBrZLiZ',
'1duCJAWtUoGA_V1dwgv_kW6-L3Qc_iiwr',
'1LQzEX-yaG993D8DZ7Kj5fnU_Vpao2ZPt',
'1cHBfpX2MeN_1gpTAjtI1ncRnPEWITWSv',
'1f2VO-oKsU8ijeW4EbtC0rJMJzuG7zCtU',
'12QMgLXmS6PhHC1P9cOVqr_7f6sIvRw3v',
'1kZF_ittEwZU5ht0xn3x6CSpMdQJ-5GQp',
'144rlkEp_jWZ3xKSItYmfFuAmIgX6xOqD',
'1GKmsbw2Qsx8N9u77epZr1YGPfzXyg-Mq',
'16Gvz0wiSNuGRzXQxwmZZ7QwyKO8TrCXj',
'10xJf7SxVEKVH56-9R_TpxGyXhk7rzUP5',
'1TJf6pNEItAXUt_RfaxtNb95aI1v_1VZl',
'17jKWDpkQM7mGNU91ydUAIT51rSdNgZ0y',
'1nn3GjINVexp_c6veuoxwrYz_hnLi6fu0',
'1QP-Ous_rVE_7JIhD0-Y-SscjEq1edzhc',
'1Ve-t0Ud0kFKlT7WQ8LzXFp8FK20K7ZUa',
'1-dwq8NiHxBYsBuJH-0iPb4UQm6VT-faT',
'1CCReGmTYsxCOgmwdxxSrP8HkvsD0Wjmb',
'1ORwFus4awZQG29JCzO9Dvto_GwxVUp63',
'17KXmGppeOxF8HthZ-S-Vd6nxPfJ1dHy9',
'1V6ImWVunuQ1_lpRyjC6vxtGAbeam7heM',
'1te7EkvAioEK3ssU62JWwcYBZUHcbXJqP',
'1LkM6x1i5F2FotnvKwcYwmGXwWzjjVkYx',
'1VZL3qDZ6vEu4HiBYpqLup8tU-JMf-2V2',
'18Fw0IjDs7if7DrUoqzoGq9Hx1c1Vrp3H',
'1PjiB6GEYNsZTZ2UyoTF2DK-oQSEx2ZKf',
'1GwmwGyJZtzHSS9-QSqTvrAkBTthx5oZ9',
'1MfoUaKQ9epoek-XdTcfjiJfG0fBUskYa',
'1AGRIkK1yhFFNn4aQomvyDDSAwEtc3Fvn',
'1tZ_ghJ61TetBN65ybMnAT-r0UvdT5L1q',
'1Vjrm3EIVJsVdCeFOq3R46sZdsr5B9PW4',
'1P6mze1lQDu9Ce1oT8OQlWOA1DADd3cUh',
'1iXf4nNul8U_f9565iHF2QSxh0abZlAgb',
'1nS50-VFN2idYhWRWcbj1-HomaDPmjSQl',
'1AAA1s81H-ZQDTyPFT92Hr_LYQYsS647W',
'1X9q2W6CNvLqcmzcEbsoIrz6Vt3grPze_',
'14_JXjSEMSoRh1Xw2XyWTvW9Pfb68JXhM',
'1wuvftN5iEiFVHUV4BAgMjGlXG0hBormk',
'1FZ_-2vo91vdCdaCGPBrkTUNV3GpQZ9_1',
'1DxbF9ZnPBkjUj-P2WbjvxFYFTDKXNF4D',
'1uoh6ZyAXBlLGfN0z_EcjZkUmMIBsn73n',
'1P0ANJFpW22921ypZiQUEArrKpKWev-6-',
'1ElesgvUPEpmj-u2cnb0bpoqHlDBOQQIt',
'1cHLhwy0U0GrGppVGsQal7-Expt99QLY0',
'1EhG4I8sdKYwQFJHZi6BCO-Cow7VzB7fv',
'1-7NTbnlMq6TmYfM6HWzpUxbwcrJ26UlC',
'1CWesViatXQMi9H8p5H3nKSYEHk73NxVX',
'13V9g4WFgdWZrYt36CmhIi307hwYVlJsS',
'1vv4X8u3OJ_cUYDFskfEeEDWSTT7qK-d9',
'10x6cFxN839A2etM_wht7oo13FImGZbnA',
'102AeR-dMZesUFHkxDShHIk2-dE3ZWEVA',
'1PND0vZgxXx_2WE2HQMe-k2UAqrD1XQD7',
'1BEYjnu1C7ncXa0jRNjYv18LtAL6mOFet',
'14oU-uhAuDuRfrYX9XX2c0_pvyjpkhjaS',
'1L2cXRhoPiNKNa0KyEKBRj66BrO1qVliT',
'1l2-2xDmKJW2vZzehWyWBFO6Y3_WWyM0H',
'1NjY20_7FztAmg1GViLD8M3KG5h35RoOV',
'1OlobyOpCtCAX5NSZy7XcDUoxeQRh_GBt',
'16z60I5RbMXgYql24tLn45M48pdokLjY1',
'1t_IuTjHn7BzExAThyeJ1NGQ18IS1_oa6',
'1TS7sLIpSH94d_FqSepwrC3JO4Cl9nmz_',
'1cnhbZvKx8KeMoOouIcVay-67Gl2Acp8m',
'1t_EmHLF6kMuRcEkQWEHp4eN0ogop82Pa',
'1BiNDoGX-iZAIpmuDr5eRBmmu25N9wBR-',
'1xWT0UERwoUnygIYe1fpH-0JhYFYbwzYd',
'1qAdFx1p7ttvK6cVYQg2ofISpbzCmAbnv',
'1EbIDwuP7SmNklpgGU4E2xXUueI_HDdFY',
'1pJvkDMrUZvescvqika0Yoz6cVf4Qwb-n',
'1l2MnJsuhiWUTm2XTHGkW6EteKEEE_oMh',
'10QLvOVSsWPlvurjcpn1FULvP0o_LDXTG',
'1hNa0XgbygRlt9xEHN0JBNWr3DX60HW3k',
'1w4lquCsPIIFqRoeNi4WXWVljg8RxN-y2',
'1tAHj6kpmpSSc_0-i5w4o6wfg3nF5k0La',
'1pqS0FLIxBn71zcgOKoWj6oa-EJ6vQiO-',
'1Z7Bv1BsdSLRWYbIeiy_gx10TiyXXGymE',
'1D4IePyN9xVsY7PKb9j0JqDwCwApKTZtE',
'16JbwhazqyCSkBxCqXcLGqipgleiTARJy',
'1M3h5Gk71uFOSx1qShZhyvIVX29le4fh3',
'1kvfqq3Xc-7XV2eZVwWCZ3brrvZWYQavv',
'1yG9kAnb_KmextKcDosOnqUDwKRur1aHs',
'1NzHDRvXS7vFVUdjpyUlnyMPwEogjx2DT',
'1vGWLPZCrGYo2sMryYDbQJiQ9zLnygb6R',
'1f8g5dPaQ9Opnzcg6Nic23vICQH4VyS-e',
'1zTJlAiab5JsebMpFAa-LFGLoeiD0GCsL',
'1KtpV6smq_AB__RgCZfuafauL_4hZg-Dh',
'18bJ-7aJ9ETds6Fkh8N-JhZFlX3m5l3jV',
'1V-u3zSZC9daclTHEDl85dRQE8en4IVjb',
'1ubTNtaZ6mVEMbq47F9vtpDaDOBezF9lH',
'1xiMLTGK7c0Fz_FQiAW1zJHurZbTIebyy',
'12Pkr5kHI7D4gLeDAbGiV9OYRDsUEhE1a',
'1WZhftVYS_mf5LxlwcJqeYauJKhsM0WWu',
'1uVokwUUDo39RbQz6IkaYxvCdU1CeSP8O',
'19kTeUYU7g3N9l7DGDjBl4KfCje8E5ops',
'1EyeUeqYJjYk2y5apGAem-055sbtl3GI9',
'1maOQ1NJbRkwi5FCrOwt40apoK4YyvqYL',
'1EFneDz2q6OfArliiBUzJtFe2mKxEx5sC',
'1TtScM-1JJp48VNsPq6TOT_8ih5NEbTq8',
'1-G0TntT6sRnfat918bXat2urJpgbBd46',
'1wbnctnJUCMKsM1BWW6o2C3A5-iDJ2bM-',
'1cIGKol2CvbNmS5C2I5QSMapR19gsAVQg',
'1fLQ4C2P_heuhYDEyYh5RXZCTXIU51yG9',
'1SkM3j1mS0ARpHkgX31JJo6EUfdtyp3MA',
'1nYGOXwXd--us1KxN2dwljL2lSKoHgWcd',
'1oz_cAXbxbBEMCICs2k72_WZ70qykC1Pn',
'1Bg0S-4VbgI8YvZRAJmf1y7jwAb-CAXwD',
'1qWsm4rGSexALZM7NakqpaXfmfqqc1yQR',
'1wc70nQLUSh7ODGq6-BeH6DhaQFIEuoHI',
'1UKBRLRMA91-LLKvFPRsCRDmXnNR5wlsr',
'1zObAefcN6jaszzlsxhBhU6XUzkI09sqU',
'11ihi5VEZFBRn40-3tLNvqTQVcE6BBcuh',
'17ExObz99ktS_xKUBkT_FOcLupCpWPIrD',
'1M4iPIa9voI3bdtteltVKmqHVGSz1OsZ3',
'1t6MhmKLY9M33dGCNp2C53N1ajPVEBxVr',
'1qiS8fJRkzThveF-i7m0eJ7PiA8jw5Rpi',
'1THzs_ucaEVXpkcBH5oe5ivSzc8vr2cKP',
'1dGnxM3mR6J-tYpl_ovQqTKMBGgtNLP68',
'1ag_VOMD67C_p53hfS5Pd-nVkI0PMH1iR',
'1j87pyfHcf3kukwNLjb8GryDHCpqQWhZ6',
'1DSKOjNIzthXJjTE0m-gUnzGjutp_M0Wi',
'13eCd7XdadFPLAhrctMv4ZdzxrOSItWcl',
'1UJcRD11UQAxn7HXYgdo_5ZoLWogRwQrk',
'1Tmk1V0VZkOwOe0mSBOMWTDyRtuFrbEma',
'1MGLFuFjDKokzQ7FrgY3jx-bEbnGAz1MQ',
'1WuXWBd-n5b-LISjvON5QsdyEjE68-oCy',
'1WtPQxjBhCFBCOUxn6VTYtqFMCQToXUQM',
'1XbQ0OI_6OAl1v3EpX8BJf8L_pxL6aGTO',
'17wDNbBCO-C24uyihzh1VvmnSftuWh6Vs',
'1KAix5qm9QovA-wT_qvp5ehU0Z9pYxYyh',
'10ad0MjANpt28gb9ueigMDYCKPqOlUfZg',
'1Qs9decGkkuzJcAWFPPfHBDRSO4WUztOr',
'1vjpdL0Pxg5Q8kjolQbNhfF5aIZ5vFrrJ',
'19LmVvwWANM3hUIANV20JMVtBynEcBSge',
'1Pa3BfoOz-yCUR3heH8lyBJ5_ABVK07EA',
'1tzWZ1iMsKh1kCRamoU_emXgE-kQwc0_7',
'1Xibuxwa5SfRKxelnkFvel4Je0rgyxZyi',
'1jzPjSBf002cc-AVbi6Py_yJBmt3lRtIr',
'1rK2F0GgoufQf2tLoalW4evGmfjbYolYj',
'1LwzailFHo7SHByTHftS4VI7EPMnD8DuE',
'1IJ0ZI4wDyKfZCThJxzL5ym7oJgAznBKt',
'1jTKJ-uSHdf3YQ48tlizG2Xmp3VbYcnyY',
'1H9c4zzeyIaWzV-2E2FXFuT1vtvrIHK1Y',
'1hWNrMZFHBEwMUUluwE-Ft6v-nELNAWPy',
'13xsCcw_-xd5OnnY6LquzX5Fg6oK--ZFc',
'1h-hYQzQeD_seWPnz6TXMRwOmRSJ3Xf9O',
'1rF-JjzQvvKbRKB6dfzs2nQKSpjXCeQx8',
'1N8m4jg4C2UHYTcSsKXLWDKCcpmm4TRn5',
'1mAR1r-sNltB6TQOuVTxuWBYSKpF7oach',
'1cbicI-KOeBL-DJBnhGtngHNceZsisAjX',
'1Q8PCteKen4y7tCgSczx9FbEVuQS75yMf',
'1BWuAgXVqJl8lQh9ZUQQ5LaC3afpbvH9l',
'1EghfHRaC62SiYS68bF1TJ2Xze1d9yh5s',
'1B1B7-G2F1tqPqvOCPmEK4Eptn1Dw4mHm',
'1wwD8mHInUfJ1U-XdXND0nA-KMZ6QSp1B',
'1y44ozAng6HPsZr3mhNhbH6G8B_O9It90',
'15TfrOHHFtmLxEDpWe1-kJKh96GDpo7QM',
'11cb5aI9-QhCjr-qb13WPs4UGxH6VbCxq',
'1H0DSjH9wGNQWGI2CbvRb2ZmeFOBKBpd5',
'1QgiL9JABI1vGM7OczaY3mD42EW7ZurIq',
'1zANlVkM5bmrHksaMhpShMeTSmkMcFuuv',
'19kQSEj-H_Ltf654ClolSvrP_B8arfKc7',
'1tnykzPzIr3GDx7RTcPqteXPXidiNd_e8',
'133wh_mGCFqhFYyGnQjvH08TYS4c_pzXo',
'1MVfVDwDfusTcAAKaSERuyK7Caa2k93GM',
'1Sv29WMl0te-5Xd3PzOpYODy3VxhzgXa2',
'1_xlc7X8L07_VSlqWx88h6kWMupr5XpmI',
'1G5HGT_pLkz951jSdZawvQl_b1jMhFqPC',
'10ESak7TTx4ZGjnw3RgEjxMv6Ww-m2X-o',
'1aYSIiNH08B-yhmtM_KO8Ifc5gxPHaPx4',
'1-7jcwdR9Y7g7jDY6Ed30F8nLgTWEMqpN',
'1JXmryJ3mCZXzORJzS5q0yletSCZVwZ9U',
'1pqLv6QbV34H7aXqhHHonf9K1T6GKCJLh',
'1pEQDgzve9aYVRpDT_wbRdMhYREWuf2eA',
'1eUzbnhrgtDWbRCDAfNd9mWh8p3QEXz_d',
'1TnfBQlldsbGhKiMd83kvlOawBsplIaQU',
'1O5Q-YP_jkcPWuWu6zcqwo9-aiIgXKfR2'



    
];

const generateDynamicEl = (ids: string[]) => {
    return ids.map(id => ({
        src: `https://drive.google.com/thumbnail?id=${id}&sz=w1000`,
        responsive: `https://drive.google.com/thumbnail?id=${id}&sz=w1000`,
        thumb: `https://drive.google.com/thumbnail?id=${id}&sz=w100`,
        subHtml: `Image ${id}`,
    }));
};

export const Wedding: FC = () => {
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

export default Wedding;
