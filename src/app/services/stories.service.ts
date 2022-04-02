/* eslint-disable max-len */
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { StorieI } from '../interfaces/storie.interface';

@Injectable({
  providedIn: 'root',
})
export class StoriesService {
  private storiesBehavior: BehaviorSubject<StorieI[]> = new BehaviorSubject([]);
  constructor() {
    this.storiesBehavior.next([
      {
        nameUser: 'fernanda',
        photoStorieUrl:
          'https://lh3.googleusercontent.com/5ys2BOx8LDvtiV5YcXpOdM5LvpXlBFgzWPYgiTh04nInddXzcmM3o6TJYaQEnJA6RY7wiJrCC7kVEh2y6VnFhdx8TQNQlbI1fnwAe7DyPN59kquXaxHNrT5-9NAwNbRUPBz6C2N6IL-ohNAK5DlJLslvI7mYSiFNGA-UQdjN2mE3I1CY5OKLDzg2jbMuE7A5OGshRJCBbcNZjicGXZZx53J8CsdAeUZr9MnNYzXPnhwR02WslYs_I9ex3Wpp9uXCVeP4NRpcy-TKgquUHPLyynTUpU4GLHr6gxnuG0Y9PRpdzAsiW9YQcwH5I6dvPIiWKm08OjMlIwK1iPEVYXaOf4f7PVg7tyX7DPfO2xBff-XisiaMLhzcVsrpQkrgWXpSTrIx9IwWTvcxMij5k211YOL_DpNQRtKXlx1ITcwejJiQxAXndoa26Qes3z3agjAnBUWwu7ZzZKSl-lnaRZnctsVkoXwJQ9VnU7HnANrYfnFL2rZ7BYP3mByUkskL9YZDyf4r1Dz3j7PJBk8P2ohPOmVhs5G6_-3hAIQ6eaXKOwtZCDSCri4MVM9CwGln7Mb-MtFO6ZwaRH7yic6t5YIolIBMdklCQt3T2XBuwoRbtQCx1yV-02sfAUAR3T_EyplopEk1FDzmUYd2xrF2_sdxu9KA-An9_NhI91N4tq83n0gRRo0Co0poQHJKc98xXNmvU9vxqso54dla7y0ULi55Z9ssnHxACNfykZ9d55UWSkzqt6YktN6NlUe44ncVnzDGyiQ-1rWTzkR15dqq0A0XI2U9CJx9kRurun8q1fPTHH9qKffUR7iVHpGtAewMzTrjgIg=w641-h961-no?authuser=0',
        userPhotoUrl:
          'https://lh3.googleusercontent.com/5bCcgLNvQ53u17yYb9-TPmO5alxyvFUyFjXmrAepAI991wTmZcfB16OBYuA8vssntJ3VcZ_RIIUmLd7lD1g2-kKhJrYsYO0NgBeL7Af9B9nDw5iLeTaz6aAU0c2fKaM2chf5yJAmKbzDxrkOGWwv0ixNMZnyUn-PFhUv3Bidbr6gfGxXzMJ-nlkPO-Azuq06sRTsR35XDpHLFGo4yV8lOOVBAD-6ETaey5vNFzbFMjdDiLuXJSrXLtpmM2fSdeTN7KWKODeARnirB8Q_F1bQpi1_EvlF-q4vnlHXgxk79I6jPdaZeQbAM1D3NJ-u6YH1fjdD9j9M_bZe7CUgWfBUzBZZK70rhOz-FX_XP6E2w-WBu0drD-fB0jxLer8tPtdWeiqYcGYSV1rV_EQ2hoXueJTMC_R61OzY2Iiq-6xW9nL6fm0IuDiJ5HE5b4dFnKQA4Vc1dw5kMPcx7SNhCfQwZqK9xIhjg-bG8K-J9K_SN6wSeWQrfq84FKzEc9nAwE_jFobIAtJIRQS4tYIfaXKjL0rbJs20K8Tqc7v0zpcVCNgfyNFL5xQjBzsXdXh3qvwqetC42QILOrpzLR9_muScoxL4drbz52LQExDmty7vhcINVzeAfOS5Z0wrC_vxV_rdr8loheS4Xq6sKjne-Qc8py5cmSx96wA0wkz1ijP0cuWVYUrKNMdZbrpRNOb8vVMHXprOCYS0Vu3Wcg9h6L-vxD0T1TqHgDzI6lD26baZLhe8kfj1I8dooJMzxqykyWGTgRXELkRa3X_vY2wap1N9EggFHCp1Sk9gt3S7F75gxJPMLFmqRdqVxWCpEz7XVn_XNsY=w641-h961-no?authuser=0',
      },
      {
        nameUser: 'james',
        photoStorieUrl:
          'https://lh3.googleusercontent.com/xsLiMK_IdwJ-8PGw63y3hqhWi33oZAUNYEnysy7vk5dZWUMgznys5aVtskJ8lRgU3z5G-1Ov7QRIHBZaR8qRWh6DMHMzq2F5uZaD2wQfg8FEQtWKp_Oid-sWfVtQf6wBPhORa9XCuG6aWgEsJZpCGKie-NcCfxm0ocWkF780sla72g4dY5A67z1VkS9qfZ8HOlRxU4wJNw7Rkshi35-V2JIrJ57qENSpS39Fz-lpy0TEo7KLNvgGm9XpWOYJJIltHzz4n4jq6-lOMz0nupBka_OV1FXXt9hqHevvwKNX-BE0AwEi6QGzQ-AqiW4Yl86LoQM8hNERRjtzqj7x7K1Br0ikjvhwRG-h-dGbjOxZNA6012qSzQgiveIW3eUT9XeCSU0QiVz6zlnMpZL-UOJqL8zz7O_8JrmlPydxDBPLbvbLzWOjBStpXBnrWpNyh9Zl6uZ1RAUEpimwKMuiGv4FWCtE9jW2bYoTseUgUtREXZ892UdkEd48NcrcJU1U095ELGd6keLHJH3oENJ075iNMVLmTFB6EY2NR9XlpX_i7NYKqfw169zHZ8OOTSVTBwFXYAzUOF3AO04-O7vd3Z6o7w9BlmXQayGOQmSG7dgdzaN8jEWmcei2PG0K_pD8MHngF2l22OXsAEUJvImdtgHLXpisFJpDy60xmcswI_imtuz8tRflZr1qV39qidAeFU38tgAxLorPQTYYC-tZuDvc5zCOxFRLK0dxdgppCBXE03OyqbELgtIb4EWFSwQ_qs3k5xJ4pwSntmXa6wMKkVBm4_kzMId1CSZjUXJGFP5Zb5x6PilmmYI5TKolDGkhHmhPwEI=w641-h961-no?authuser=0',
        userPhotoUrl:
          'https://lh3.googleusercontent.com/bG-KLptv0nK9x6OH0GL0Cm2y6Y_kzCIwmTSVrzthUt_mf3UjN32_Z3G1-oA9L0HM8wMR7wXNYECMu1VNpLoVBs7iBxKRzGBEILBvao_bmLlDypzIZXP9sVG_hlM8sMIcAdn-IousXQMJ9pm9w4x24BJk5CRdW3DeJV53NI1vSexnOksDqCjVVCvg3Gq3nsDaAZFeu7f2e8DpuamglOZ1cMw7Vy5TLfdxs2NjLS2kQK8ppgo-Cugj3XkJL1E8XEnmGNHQBKzsy3t3o1lMpRqxKBqBiuDTL8ga1ZAEwPdqX42J2Czkm3MJT5R_hx-3gctbGCHpIKf8frOm0QDUsgRyFc4H1B1Jv_NKLq7AEx9Ry-winX3KV4h7nYjeE7ODSavkvTjIqgHQEFCMMTSnxp9X8Cp7tYSliiaL4pxP08xue3-qZpjHQiWtuMri661XQKwzeIBo_BkVs942KbUkAA0QTOPojGlCMT5Qu6yIJiNYpM_JoNC4kR4lMyIJBrHFiSprDF87LXLA2bfeGiJnxWqWzQhOBi233EMJAxt_kp5aGICJFLvui7cRB25-4JozonmQe34aaYWjUKZcUxJkoZ6Gk-hgijDBev15_l6CWH9fVsjB4hFWEfgE_ztpFunDvkwDqbJ4gS4kxWQizGeWb4K1RwiunxqiJtc8AE6ODgOHnYGN1hYxJSNrW5SmyrpBdeu8xxr2a-2XxoD0e5hjzUH4xWeKqT-M23yHsthoz4TWhqr-hOPdQ3FW7EE3mCobwZqmKaVcxjg6sPubSYJFqmNUDzWABNU1dArgWLys8tHMzBMA-XXLw0to-QZfzp38WXgJ2HA=w1024-h683-no?authuser=0',
      },
      {
        nameUser: 'estefania',
        photoStorieUrl:
          'https://lh3.googleusercontent.com/hTzoS80BLBXbGBtPdemmsqYBSLtd3CGRyK6BTf2ZoTAhdi_UDmA3MYWVyiTH5HWmGR720yByqg2VqHSq2QLsZBHMvu0CS6_uJHKcuzMHTfHVkZ56qRspl8MMfs8iW0uqQ2ak98siwsntHHSmqO-9MwJxpzQdr3p-CWFtYbIOBH_tcUWETCADfMSzSjMQBF2wxGITYbFqD1O1ygKKkB43T1x64V0PHMvkL2I7xOh1DViS7lB0vyCObfD7XL8exQVRbnfAY9xBjo3U2PRfkx5BEg17H7RU3VDyBwRQ5aXOQAXxbM6BtPIo8Yaqk5S85JXOxrRhv9yblwnfSCMOMrRGOVxfBTtUm1k6sElhUfcQq5V-pvVN3Xm2scN_EUd0J9OtpLv5KEgd8HT6ZYTzufJ6JLiqHSSuuxnvHHGom7wm4ZPUwO63mu4p4Q5KBRGWXS4Jaqd1VaxGVi3FDP96eg6orcowehyFzze053eFNDBeveDF7ne7jOxdRbNEaYrGs20gMfreD1-mA6rL_zAqIQS48fJttGsZPQ_sqUczee2MRLZyYgYAaeKsGNbffnHVpaSU_Scar66RFHLuvILFWmr9QxriTq_z2lMn3IWOyWAluyCxNUbPTfO2aJClSZeyUkyTko73TKwytElHDizRdbWjsf6NHOCuhIjiz-uYyV71EM_QVxXktlUqs1RmPhCdow-VU7fDveyS4xHfp7001Xj08l5jF51xfaPOnkyYIjZ99M2FKLGmgbVuZza9aCMSGHKhJQwYWK8mwBUymR97b_Oi2onS5RimEFDb2oxYUAg479BDpGxNpnvhIXUvVnn9CH31yzQ=w641-h962-no?authuser=0',
        userPhotoUrl:
          'https://lh3.googleusercontent.com/csHqF2X_ZgJNFlepo8biUDR-URRHkE4UYSo0pyVzVF7utllLTAFBqpqWsnD0aHZQ5UVWpRrgNIsrvTAnL8G3pN1fvtgYMqmEHZJ3GAxReFfs2y0athrBGj7P3pVMSrKD-UapbiBpnz6sYTHL2Z_80UzQrwPET3JFwUKKGsj4s18gbeSEktWBDkCE8sF1sNJk6-iMTig5AVhhaCzyjei2UX9p-kiStwiDbq5BAmIn4SaGc6OAKS9I2jbxcNEZHwtiVfCc_0GIs84jzYVlvEgHhUPdi2HP5J06AI-aPVey1BlFYXs8ZcyThBq45yLWkJxnqCwm7Yhxj_wwN3b1ZPLi1-kfBT4mzicevSPLrcfxVLo9y3Xf8hUfgt1L2CDjaOq4kg-1oL_fQTcrv_hKT-i_29RtatTJUSgaaAoedCjSizC2AJwSjlqp0boUI19BS663S8LacwMCLjzMcMDR7BPhzaifNCkAywCLw_i2tkISxxt4U3bq3m_wBZu4ak5KRXYGLaag6d9y89um8YX2WF_hkqz2d8ZxLycMLagFbiqiMhK7jBwUBg5GQ2EGrYbOfHAXpKG04pM9N5dwwt0OKyXWTjR8wl1FC68rmToyn1WtEl81sBI6QhjB68kIe5EGcfBydmXdjpWrtnM4fo8BqX6mM_mjJR358Ttjs1K0PMtxMZJg4mh7WxcUlJUZn9xU5-8DNJYQuS8JIqFsQutAV7MSVW0T8paZ4I0OdoZpQDbZmG98VtOz6z_fhF_V09lz-499P8iZEKMkky7G7nJ5b3ro7perxjWY4gAQl7DH5vm4nxDcX5lAj1oI_i8Vif3qdaLV_t0=w641-h961-no?authuser=0',
      },
      {
        nameUser: 'fanny',
        photoStorieUrl:
          'https://lh3.googleusercontent.com/N1FKt42HYDQ562Xf3NSO6IZx9L0LQo61zicGlteUkiLqcvZ0cCUPPCqw7RZ8ssY4CTTKn59OhDVlNd05b1vGHN3h4Plg4u7L4FUahcANLB91a5n5Hnca0QW1DZ8VfPZ6zMeAgUCTejxopY9dVmLz2G4oqJrxXohwFLDWOXo-Ax01-a_gJiO6c7kdeoR9m1cm6B0mUy7939L2bvQ7fHrYOHj4LU6ffaTOU7l6tG3isV8anv-EbpzV_rsAdtTWsbslQ5EUm2-tJg1qveMQnT_PY49XLd02ljmYiWwOjCHAcmARZumNvBRpN6wgaFkTaFsPZKYBrGyStEyFrIO0dKhcjGImknhmHjcpn1bnl4Kf33qYiNnQGkaTVotcQKWYvfuHAxPFMvgTFAjzEIAHUN1EsmxqD385xZMat9s_iUi5HafkzZda5DOyGyMFZi5cu6jekUUmBwRQX-aFTZBKBlTnZTHIZGUfLlYFPIhYY4WaGUD0vrfwQelQqYtGRlAIfGq3VHKFEJJmnC2hvbwVvB-voza37fFlvWXd7r8iMd-3-3KHzXi3NO60Fy_SOnvdizc5DVHdg_jfR__77fOjdEuOA_fK8Z8OzPA4tGBsQ-FAW1kJzpa0MKVQLaR4MVjah-vKPD95zKPRkzuw99QMQgdFRxIM2aietPNfsw6mttFGQuD3_-WkahccpkvrtGv-Xb7Tg2iyTwSToY3aTKJUJpC7Xeq74MPschdBZucGFJsOzfBn1h_zAoPqKiCyoVFnOztzCNfgwYMuBlkpr2a08DW_UXi0gCTN5rERET_nY9YC_QLZpOzOPB7TVuG7QTEJJus1-GY=w221-h331-no?authuser=0',
        userPhotoUrl:
          'https://lh3.googleusercontent.com/5bCcgLNvQ53u17yYb9-TPmO5alxyvFUyFjXmrAepAI991wTmZcfB16OBYuA8vssntJ3VcZ_RIIUmLd7lD1g2-kKhJrYsYO0NgBeL7Af9B9nDw5iLeTaz6aAU0c2fKaM2chf5yJAmKbzDxrkOGWwv0ixNMZnyUn-PFhUv3Bidbr6gfGxXzMJ-nlkPO-Azuq06sRTsR35XDpHLFGo4yV8lOOVBAD-6ETaey5vNFzbFMjdDiLuXJSrXLtpmM2fSdeTN7KWKODeARnirB8Q_F1bQpi1_EvlF-q4vnlHXgxk79I6jPdaZeQbAM1D3NJ-u6YH1fjdD9j9M_bZe7CUgWfBUzBZZK70rhOz-FX_XP6E2w-WBu0drD-fB0jxLer8tPtdWeiqYcGYSV1rV_EQ2hoXueJTMC_R61OzY2Iiq-6xW9nL6fm0IuDiJ5HE5b4dFnKQA4Vc1dw5kMPcx7SNhCfQwZqK9xIhjg-bG8K-J9K_SN6wSeWQrfq84FKzEc9nAwE_jFobIAtJIRQS4tYIfaXKjL0rbJs20K8Tqc7v0zpcVCNgfyNFL5xQjBzsXdXh3qvwqetC42QILOrpzLR9_muScoxL4drbz52LQExDmty7vhcINVzeAfOS5Z0wrC_vxV_rdr8loheS4Xq6sKjne-Qc8py5cmSx96wA0wkz1ijP0cuWVYUrKNMdZbrpRNOb8vVMHXprOCYS0Vu3Wcg9h6L-vxD0T1TqHgDzI6lD26baZLhe8kfj1I8dooJMzxqykyWGTgRXELkRa3X_vY2wap1N9EggFHCp1Sk9gt3S7F75gxJPMLFmqRdqVxWCpEz7XVn_XNsY=w641-h961-no?authuser=0',
      },
      {
        nameUser: 'fanny',
        photoStorieUrl:
          'https://lh3.googleusercontent.com/csHqF2X_ZgJNFlepo8biUDR-URRHkE4UYSo0pyVzVF7utllLTAFBqpqWsnD0aHZQ5UVWpRrgNIsrvTAnL8G3pN1fvtgYMqmEHZJ3GAxReFfs2y0athrBGj7P3pVMSrKD-UapbiBpnz6sYTHL2Z_80UzQrwPET3JFwUKKGsj4s18gbeSEktWBDkCE8sF1sNJk6-iMTig5AVhhaCzyjei2UX9p-kiStwiDbq5BAmIn4SaGc6OAKS9I2jbxcNEZHwtiVfCc_0GIs84jzYVlvEgHhUPdi2HP5J06AI-aPVey1BlFYXs8ZcyThBq45yLWkJxnqCwm7Yhxj_wwN3b1ZPLi1-kfBT4mzicevSPLrcfxVLo9y3Xf8hUfgt1L2CDjaOq4kg-1oL_fQTcrv_hKT-i_29RtatTJUSgaaAoedCjSizC2AJwSjlqp0boUI19BS663S8LacwMCLjzMcMDR7BPhzaifNCkAywCLw_i2tkISxxt4U3bq3m_wBZu4ak5KRXYGLaag6d9y89um8YX2WF_hkqz2d8ZxLycMLagFbiqiMhK7jBwUBg5GQ2EGrYbOfHAXpKG04pM9N5dwwt0OKyXWTjR8wl1FC68rmToyn1WtEl81sBI6QhjB68kIe5EGcfBydmXdjpWrtnM4fo8BqX6mM_mjJR358Ttjs1K0PMtxMZJg4mh7WxcUlJUZn9xU5-8DNJYQuS8JIqFsQutAV7MSVW0T8paZ4I0OdoZpQDbZmG98VtOz6z_fhF_V09lz-499P8iZEKMkky7G7nJ5b3ro7perxjWY4gAQl7DH5vm4nxDcX5lAj1oI_i8Vif3qdaLV_t0=w641-h961-no?authuser=0',
        userPhotoUrl:
          'https://lh3.googleusercontent.com/5bCcgLNvQ53u17yYb9-TPmO5alxyvFUyFjXmrAepAI991wTmZcfB16OBYuA8vssntJ3VcZ_RIIUmLd7lD1g2-kKhJrYsYO0NgBeL7Af9B9nDw5iLeTaz6aAU0c2fKaM2chf5yJAmKbzDxrkOGWwv0ixNMZnyUn-PFhUv3Bidbr6gfGxXzMJ-nlkPO-Azuq06sRTsR35XDpHLFGo4yV8lOOVBAD-6ETaey5vNFzbFMjdDiLuXJSrXLtpmM2fSdeTN7KWKODeARnirB8Q_F1bQpi1_EvlF-q4vnlHXgxk79I6jPdaZeQbAM1D3NJ-u6YH1fjdD9j9M_bZe7CUgWfBUzBZZK70rhOz-FX_XP6E2w-WBu0drD-fB0jxLer8tPtdWeiqYcGYSV1rV_EQ2hoXueJTMC_R61OzY2Iiq-6xW9nL6fm0IuDiJ5HE5b4dFnKQA4Vc1dw5kMPcx7SNhCfQwZqK9xIhjg-bG8K-J9K_SN6wSeWQrfq84FKzEc9nAwE_jFobIAtJIRQS4tYIfaXKjL0rbJs20K8Tqc7v0zpcVCNgfyNFL5xQjBzsXdXh3qvwqetC42QILOrpzLR9_muScoxL4drbz52LQExDmty7vhcINVzeAfOS5Z0wrC_vxV_rdr8loheS4Xq6sKjne-Qc8py5cmSx96wA0wkz1ijP0cuWVYUrKNMdZbrpRNOb8vVMHXprOCYS0Vu3Wcg9h6L-vxD0T1TqHgDzI6lD26baZLhe8kfj1I8dooJMzxqykyWGTgRXELkRa3X_vY2wap1N9EggFHCp1Sk9gt3S7F75gxJPMLFmqRdqVxWCpEz7XVn_XNsY=w641-h961-no?authuser=0',
      },
    ]);
  }

  getStories(): Observable<StorieI[]> {
    return this.storiesBehavior.asObservable();
  }
}
