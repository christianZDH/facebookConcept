/* eslint-disable max-len */
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { UserI, CollectionI, FriendI } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private userBehavior: BehaviorSubject<UserI> = new BehaviorSubject(null);
  private collectionsBehavior: BehaviorSubject<CollectionI[]> =
    new BehaviorSubject([]);
  private friendsBehavior: BehaviorSubject<FriendI[]> = new BehaviorSubject([]);
  constructor() {
    this.userBehavior.next({
      userPhotoUrl:
        'https://lh3.googleusercontent.com/getPuvpN6rGUjXUJgZqZlHN6Fby1DxhWLCmimPb7OaGwtyAPpUWALqLUU2B84M4EkUZLfc4KPokRqvMAWWl1AxHA4j8vgqtzna5nh0iVCC0j43qNxx0A5Uq66MdsMCm88yCx8csQMOefViBguT_JNYrVrwz_SrwenlvILkYLcCrsEDeiW1yrfkY_p8gWhoUuAP7xALmQR6uN8m6_rITXnXaNw313lXpiykOOpzEK7fuy5K5RY_YX3s4X4EeRx7G0ibvT5aaEFjFZ5xx7U5qPkNGlrHvGC0c07tAG_eA2sEgEi36IdFlgFbYxQTUmv4cF32SQOrzEyNc84H6vud8v4I_t4KIXxGUB0SN0Wz5W12DJG9Iwxg4MaMrBRzlsaWJJzrdCVQlkJdCz6HhFCqCOXC3sC6JUMC8CZPaGTfPxWDKtdVqR3FSxUnBrD5KMXcfVUXH3NuDq_IM_jCoM_VGBOq05MiMfTK2reK2peeNdNJUnJgfYkLmqfDincdpE2cyp6VpzdHPr3a7pRiREScClk4pyz9q1MCVnU8TCuqqt-wTivky2ZaJpj6pA6HBjNOak2BgIfMrtzYST6ccCdEUBuaE-QNpe3SYmKSeMi4PbYn2lUnUh8jxmNgnofOj1wU6jv8PskKGoFgbp7v4IrW0mIuuzel83az-iWx0NkDo4TN_hZxZeVQYeiESgjIqKAGQItcjf-vjay8I6DjQrkt9_62_EZdjAYb4kDDiQhlrzSfdcP83N9sno3i2BF_Vm55CGMrkMD1EADky1QKPxTBS0b19H4pxeFGd4O73dhNWTSPJvmw9TuY7KAzm3sWiuovGSjp0=w721-h961-no?authuser=0',
      userName: 'mao lop',
      description: 'Mauricio Lopez | Diseñador UI/UX | Developer',
      from: 'Zihuatanejo, Guerrero, México',
      join: 'Septiembre de 2010',
      friendsCount: 2004,
    });

    this.collectionsBehavior.next([
      {
        collectionPhotoUrl:
          'https://lh3.googleusercontent.com/getPuvpN6rGUjXUJgZqZlHN6Fby1DxhWLCmimPb7OaGwtyAPpUWALqLUU2B84M4EkUZLfc4KPokRqvMAWWl1AxHA4j8vgqtzna5nh0iVCC0j43qNxx0A5Uq66MdsMCm88yCx8csQMOefViBguT_JNYrVrwz_SrwenlvILkYLcCrsEDeiW1yrfkY_p8gWhoUuAP7xALmQR6uN8m6_rITXnXaNw313lXpiykOOpzEK7fuy5K5RY_YX3s4X4EeRx7G0ibvT5aaEFjFZ5xx7U5qPkNGlrHvGC0c07tAG_eA2sEgEi36IdFlgFbYxQTUmv4cF32SQOrzEyNc84H6vud8v4I_t4KIXxGUB0SN0Wz5W12DJG9Iwxg4MaMrBRzlsaWJJzrdCVQlkJdCz6HhFCqCOXC3sC6JUMC8CZPaGTfPxWDKtdVqR3FSxUnBrD5KMXcfVUXH3NuDq_IM_jCoM_VGBOq05MiMfTK2reK2peeNdNJUnJgfYkLmqfDincdpE2cyp6VpzdHPr3a7pRiREScClk4pyz9q1MCVnU8TCuqqt-wTivky2ZaJpj6pA6HBjNOak2BgIfMrtzYST6ccCdEUBuaE-QNpe3SYmKSeMi4PbYn2lUnUh8jxmNgnofOj1wU6jv8PskKGoFgbp7v4IrW0mIuuzel83az-iWx0NkDo4TN_hZxZeVQYeiESgjIqKAGQItcjf-vjay8I6DjQrkt9_62_EZdjAYb4kDDiQhlrzSfdcP83N9sno3i2BF_Vm55CGMrkMD1EADky1QKPxTBS0b19H4pxeFGd4O73dhNWTSPJvmw9TuY7KAzm3sWiuovGSjp0=w721-h961-no?authuser=0',
        description: 'colección',
      },
      {
        collectionPhotoUrl:
          'https://lh3.googleusercontent.com/3Mk2fuQVofcgjaJ9OOQx37WOGYi7KOxnXFrpJQvPU27fuU_EkbNH4ICSvC_noFKLznwWr2cDRK4UJtcpwkPTOxG2W8naNyqiZ389g989VLAAnLv35T_xJRID8TI-Ao4xvNQXzjInF7NkIyXYJnh9NgKOvqrF2wjCYSbX9pY-Xi7JL5EQwwhG3OgdYfPlnfMbn5H_CDVkiJvzfPPbRLuUMB8ulr6M7fJjP5VWBGJIsZ-d6t3wWLrsEVtk_ycSmI_v5n9j-JlNyK0VGbR1XCd6x5XbZwJYdlmHhvur_pTJVU0KPYaexsTREvG37BHCitYx-HP_N-3Z94U1tX7b6lUpxeZ_kTzKNul-jLCZi_dFpHQQIhhmcAeBkBoF_-sIFV4CUYItc7ry78FtFJi1ZW5c12O-02s2c2B4mPgPQSOEivrZigtCkxMebcF33KJnxk0YCd2K4LL6IBmFBNRQFiTRzHh5bSkK6518dkjx2cXin8yZHU2TRBqAjDEMVkmyfw-m8J4dZeqckxjUXCSyNlu_QRGkLDAsFpsftGbN8dbDWmt2uzbzUHvlbdvlB1La937UC1-CnLhn55uuPQmqZ52W0H0Wr9nyUk34hTzWafP4DsgL1QezlWQ596FakLAQlzbQvzokPsA9HOnpKPq76VGlmmocAMZm5qrLu2Oq2iecW9aPFpLrVFEy_pzUV2rn9YEGc259s1InkWLrb77LhslMknU7cL_qvf1gcfp41gBRQq6Af4bdSpb_T3aZVHxdmIiNwwRYTMctQsJ3ldl-YA4cq-Y1v8RpRMdbAF6M02s08i6gVELTOQVR3r_PZbuoEyjglBs=w242-h323-no?authuser=0',
        description: 'colección',
      },
      {
        collectionPhotoUrl:
          'https://lh3.googleusercontent.com/VI_RN69RbxIqcCBF-OHNoIyI5QrXGGEGmUdpz0hECMClB3Tw0co_PRc7uqf7TyPZVPGL-kFUUmepXb4SoiDXuwfXfDFgCC0QO-uDabKhRfBcCot_Qs2W1gPBVIMOO2WziuU-dhTqIaHazQ4RAV5QBSUW4a6FbdoZDxMG8MAMxJhfx3keF-FTPEwiDM6fGhaHvytk62LURsVlB3H7KTnOk2a0NCFkXiNx43zlsU58C1WUDvpUUVg2SKYZwJVbbg7OTUoBxKMfbOvQWsZOXpV5mdjWcjfulPDesmCknZ-FrUIIMFZRU_ZIi0N-cGlXpV4k-yjS_kxDlE193lTtP8X9dKfxzT96omx8l9gOoR-Ru9jRuJfdgSW9aoqu1k3dkHQFe-A9idveaxvRmIYoNRPbsy5MO0ahr-edcAcFuL658BrLFb_M2DKZZ01XYIYq9iQuokH1LYx47rYJhiQtAP67jMwA0cNMwi2uMLOZCJ_3LaaW2IqqJ_mPdPMw2uHJVtlH9KQYz_oDPSUEh2kOCNcIspEoGLtFB2f4Nm8Z1ANhIgBLk8NZ4VWnvEcQ1D1mLr-XwGWoVhQefHHOO3EL2ASdxTSCO-sQIB2GCwCY90vTmfTZgUe_t_1sZNAJgAqvQUAg_IxOfHcSbkywAzdJcP6VLbtQFJCvQg8y-BOtjhfPRgVjGXouDAhmC63u1jOVEpGQoG0xA078nCYG44-h5Qy_qzcj-h9Hy0FT7HJd2_2JSSWXLO6Ugddt5HmOJvtFgmnVWOTqn7BA1OO5DK4KoKgSTunoKCIwcO60ONNlRM8cW9lffssXTuV2OLZAaZod4WYPcYQ=w641-h961-no?authuser=0',
        description: 'colección',
      },
      {
        collectionPhotoUrl:
          'https://lh3.googleusercontent.com/evnd-d07pU184V6wtUi2x6m_ERRP8Bz2DKCrwHvYMN8VgjN-syjr-uzqF9c28x1bZdzf49Q6SgR6j6gOjV9zouDcS0sRclSTn-4DQd_Vi90U6-nvtBM0rmD-f_U6IVMVFGf26KoArHUflKL10_UE4ZXNpgNiLA8HbnUSR7ZPWFPNC3aXhqEWEQZtaYm6Jt6I8JGdpkfC66bYk2ZIaKWH-B_tmxeQ0NKVV9dCFLDqrKDrXgeilfQURh0BSSlwx5eUpn8STNcB54tzMhD5ox2pqW9E-VT_d06sOu6NgdVvk1iAsTyBrnqkuBPYqhoNS1CvzrcgKR3zwHGWjdHVfl8rFdxbnuUFH8dQ30vRGPDxMbxfx5ry6JwJ12IAgddnIbD_lOX3UhueJ_9hV1FPZDHUFWRapuVyUQsWgqg4YmeJGE6ZqkFcXgNt5S_HHZ0-qADIiys4VjrR4TNKyrPvA9HvfOQmVXGR4kkRdqmNqmlaJiOL2OFHE1UnXJ-wAWsMESHdzCYhPBWJG3i3eVaForXoqHfQPXBPsuxrNU_9p7St5BEVP7QMBLWYOSDGx5r_MaONSfAYjUKXnd5dcOt9PNMlINbTQdkIDINS-hbh67aXiPMbKDLZovngQh8s0VOuEhP4Y7ojXyYQqe9-CShur8obH5gQiBhtlAU4UERpZT5a8DEuU80gYOEQi3RwlQFpku0HTgSM5jjC8eGp_A3juFPAkhsy1ZG_ksc8Zz71jBFIOW2fY_JD19eq6Dif3vjFQksj8TiLzbzHVt7jwUjxMymfnlk0I9g93OYEtZ1pm_J8LDH3pPA2VNxmK-mdz2OdDki3EKw=s961-no?authuser=0',
        description: 'colección',
      },
      {
        collectionPhotoUrl:
          'https://lh3.googleusercontent.com/5K6_1bDnBxopBNkoboyEuydDexC9-b6-ugoaAIIIIPtpTp5oSyCPyz9PdmalrDqQhK2_4wpNoubm-uLVsQR2Fz1DdoA5WGJfIWf3w-j-a0rIHLjPSZ--Fwm4zY3jk4xaG_ZtRm7yd0sP4b3bCvj2M4CtmtTnBtQVXKxnQV6EVd2PGzpn2m-re_un-Atwu2uxapRJ7oz31uwm9L-K_M_8Ze0ML-cH1bMrmgnWkDEV5r9AYMYjjSoLNbF3bHYNi9Kg1A486Vj3XCV4pKGHsAARD2K8bpdrWa-HSR1oyq8LM0il9r1ch2hbQcOlQPDcb-SlEYFYARZi5zya52aWby9WyVn_fa6PtUYg8zf45tzVQK47GfG7OYsczXcIIDnihYCIB5Mw0OjE7zUu2Dn6d77eFBT1XZu1ecoss-wtVPmuA6moWkh66SMNZ544Jl-bP1mlmXd9O5udYw0MYIGSB7IiZ7WuMlQ0mhIw3qNYpyDBfQGPFA008B5FXEV7sRoO1UTqgg3VBG8rl3hWrwzh3_G2XZ929bsFtQC4u8XxkdHYshsqDqCgdu24LCrff27hHT6pT7i1oxG_ETHAAnvqHkxFm51FcXhlrAVyAWtLPSHfqlvnp-V6hHFxNoD81wSEETypB1RFoB977sXk1aCNBVCOkJYjfL5ZZv0g_2CWvjUU1P5A84FulB4nN-E83KNPSyIOsQIU_-09NtNMinR2U5EvZZurF_nY7r8SNcthJHhTBX0Uw2bXgjjLXlUqpkHEUZFGWGrFgdLE0_PgCFYGckzEY_FvGyl1mhyANtpZB4me4rcZu1a7CgSn-ORks1R5ObSZNPA=w276-h320-no?authuser=0',
        description: 'colección',
      },
    ]);

    this.friendsBehavior.next([
      {
        userName: 'wilber garcia',
        userPhotoUrl:
          'https://lh3.googleusercontent.com/W97nfpbSXMlh2_Y50HuZVFapByvGNRZykBt_HM0NQHKPMY3H9vQEH4cNMEECvq_u94zoZmhOTyoLQJkFb1ySxo-nnnrDgPBSOOUhA6o5AWnPWma2IUXRgoiIXykKO7vMck2W0oZXxgMi3OEBEbupGrM6uWPdXi3KStf1-DyGlAaXePb0fLk10bbMqLXBBFir7y6W3wD7BrCSDJj3AwnQJEFkONcp6t71KFcOiDEFjpvF2cQy4Tv34SwQkDWx5OyIWbxhn30DbAuUOfcjrCKMq65FlG6z2OxA6fAqS_Ci3pgsoG2_gzUzSUTb9KU_dDklhbL-6QpPyRxVfc3UHRDlXXCh-UkAKPkSZW2jrKo52urhVP-bPl50QzWPYnX4R92SLxB-wMtDI17Uk9nxsbPkU7GdrXjFCIFWJ4elell_PM0o15uUqpZoOKHMgtXusm1vblT842dHZipQQUMXg0PG7W8kWDGMnm3CPMuGOUL3xR15sBD0CsRcqFYH1ArpM07WFmtqs8lQrIPD-tt_2F0LAWz21RIh_g6jPwRaC4GCg1Hgx-KsHyu92O8ZqUe4RCd_0ZaqOvdYDZkrocwnCW3-eiOhthPdZgozUenDN6vtGQB9LKjJ-BVmTEzxDMIj6i0Db-d_RVGL7x70XN0Y2pT3ROH_vjT0b9LY4QMUr29KvmOxPUP45Da5nV4IFETjN9VjPiuKsYqS1ND_KORJpWFRuWXk-gyCfbxqGOtaZUvDVyr5RdL-E0hZ3UrdnnTINoCFwFfEgELzQPixm8F3NoKFsLy65KRjFZ3erMuiOaxqLnun67bo8mNJq9cinybgxWxeogE=w641-h961-no?authuser=0',
      },
      {
        userName: 'michael gais',
        userPhotoUrl:
          'https://lh3.googleusercontent.com/r47zWTB2Dfqib4PtlpliPo_iDxJto8-08_0hEKVMTHJYJsLjLu9hTOe-T9W3mKcu3pJgAexh8sTaXiCnSVfjedDeCkjUN7zcQ_KIf-Nzd4YmntphwapGzsW71IPwXhuNs6MOrYXrDl5hKfoSqaS_0M5GlXaiyVU6bqYttST-T7p_nVUoaH3MwF6EX44I-hw7aZHOvLlnDxbK0MgFo0di5AWQu9B1Yjn5LQ4Aeq650N7FZc8X3R_cgQMVdVK4893YqhLcZU9auMhHIN0nED7PEcwPWbqoWVGk0dOpRwN4SsvvDJ8FZIS51bZnVsidWCG6tZrxBujzVc6W3A3F2tYm8AGP-AhrenUG8PksYvPNLABrqPCvUq0O7NaDiMS_cM-H_k9uj-f0NSQmqTNrzFMcGhPzCsEkkNq5Dzcack2eW5I9ag_qWX8UmuuKO0R4a3VUvohkW5-l9dUpcAcy7IvI8OXJ6APaH5GSVXwPnCsOe5Jl8NmRDaUCg6Pzp0zTK3mx3A-VTV1PGf02eGpjE-yK7hkEdkrK2aJg8IMvFlfeQ5XgPn-wLrv1TR59FewVd5Znus3M7A8BFdDNTrZmLexNGk2tmJ-2EX8LtFkJGmMVR3GJa_KXEnPvUzVIpDN7ur246MgkrhKCzpDaJNjqEcgm1NeObM3h26SbGtYpNdSX7nbGAjXuBL37c7f50PsmOtbjNZVpaZRC4TfkISxL3sDufwKb-FwDuJIQUytMJS3CNBOCyXtG7vdEgi6sUdI80NXdWxTbFT9GBgn7aEplz5ENtj8DNr5s1xA7zTLe_Fj_cBMA6fJoUQTlSZXwNH-pu7Z1jDA=w485-h323-no?authuser=0',
      },
      {
        userName: 'daniela lopéz',
        userPhotoUrl:
          'https://lh3.googleusercontent.com/fixEEU1XT8U2Z-NqhtD9trXD8vwX0FdLdShHpiIsd0XK4_buzrBGZyHVlgGV5RAea6T4BBZt5uiEDHIh61ZC2HCd2hTBu7eeqY4GGE0en4wb3GSOwuk8Me-WaPCJJPdvsJ70NIlBEUJRJS7TJtGtHdlPw1SzZDVWELbKJaerg45bxH8pPfoQ3eOdCk_afexAZB4bsRY_VoDNDtgf_71bnWA1UBRi44PBI40AEqJL9NzA2Hk5IYI-AOgOxrIqD5qgKWSweVAneKcv_W79OjMh8590XrcZFyArvN9GnIZrfvaWhVIKDJOnMXUAhj6hUbxkqCL7I3I_R0dQQd_pycZ69RcflGHg93HzGYUIE-HN4UCgpFKgT2RBlK6f0EVrE8Q14R0aTBws1GcxJiBN6aB4htwHpQuXaqPNxA1B3kE2ZFSpjKh9f18PzMv0q-zDvesUtniLactUy-TEr87dJKqAOx7mlK6V6ZJAQvP9l7SwLC6vhCAD_IX18IRpuMszYJDJE3bObblXtUOL9aRMJWLXKkKiJ8zVa-Sdod7oWEUy-8HhCWTtmBAcwlqG4plNacEqsYaAstDlKuHrTTiefIWVH6SwskD90rYOb5QDAD267_rFlInZQb2sjCFL_cy7zxfSsu4s0I4b6V6LHMPA8ANaENpLGT-4PHQhWJJ5j8Ucvr-vWhKFGOOtBwCBM5--8H0o-tRwLnPZNA7QnJQ1d-EqE0JtbOYLOec6Bcpcb-aByexsv3yp1rywEJTuy8tqrx1ke0BtZjxFK_FhLIlmrwFjLgu_O_Kgd8pVdqPjn6yNQdy-q6IpqsVUnbvoSRn_hlY1hX8=w769-h961-no?authuser=0',
      },
      {
        userName: 'sarai perez',
        userPhotoUrl:
          'https://lh3.googleusercontent.com/csHqF2X_ZgJNFlepo8biUDR-URRHkE4UYSo0pyVzVF7utllLTAFBqpqWsnD0aHZQ5UVWpRrgNIsrvTAnL8G3pN1fvtgYMqmEHZJ3GAxReFfs2y0athrBGj7P3pVMSrKD-UapbiBpnz6sYTHL2Z_80UzQrwPET3JFwUKKGsj4s18gbeSEktWBDkCE8sF1sNJk6-iMTig5AVhhaCzyjei2UX9p-kiStwiDbq5BAmIn4SaGc6OAKS9I2jbxcNEZHwtiVfCc_0GIs84jzYVlvEgHhUPdi2HP5J06AI-aPVey1BlFYXs8ZcyThBq45yLWkJxnqCwm7Yhxj_wwN3b1ZPLi1-kfBT4mzicevSPLrcfxVLo9y3Xf8hUfgt1L2CDjaOq4kg-1oL_fQTcrv_hKT-i_29RtatTJUSgaaAoedCjSizC2AJwSjlqp0boUI19BS663S8LacwMCLjzMcMDR7BPhzaifNCkAywCLw_i2tkISxxt4U3bq3m_wBZu4ak5KRXYGLaag6d9y89um8YX2WF_hkqz2d8ZxLycMLagFbiqiMhK7jBwUBg5GQ2EGrYbOfHAXpKG04pM9N5dwwt0OKyXWTjR8wl1FC68rmToyn1WtEl81sBI6QhjB68kIe5EGcfBydmXdjpWrtnM4fo8BqX6mM_mjJR358Ttjs1K0PMtxMZJg4mh7WxcUlJUZn9xU5-8DNJYQuS8JIqFsQutAV7MSVW0T8paZ4I0OdoZpQDbZmG98VtOz6z_fhF_V09lz-499P8iZEKMkky7G7nJ5b3ro7perxjWY4gAQl7DH5vm4nxDcX5lAj1oI_i8Vif3qdaLV_t0=w641-h961-no?authuser=0',
      },
    ]);
  }

  getUser(): Observable<UserI> {
    return this.userBehavior.asObservable();
  }

  getCollections() {
    return this.collectionsBehavior.asObservable();
  }

  getFriends() {
    return this.friendsBehavior.asObservable();
  }
}
