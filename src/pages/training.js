import React from "react";
import Layout from "@theme/Layout";
import styles from "./training.module.css";
import clsx from "clsx";
export default function Training() {
	return (
		<Layout
			title="Training"
			description="Training | Ulagellam"
			wrapperClassName={clsx(styles.wrapperClass)}
		>
			<div class="container">
				{/* <h1>Training</h1> */}
				{/* <div class="avatar">
					<div class={clsx(styles["left"])}>
						<img
							alt="placeholder"
							src="https://lh3.googleusercontent.com/fife/AMPSemeeHLQ4SYUfMO76eG0zznSc-GQg_xvj0Us8i7WINMfxpTCifO6E-xrficjcBtkYsCj6abBpUEGKHcDoBW7O2niK98WGUg-t3_lssj2yVZMBkwEUXkfptqVQNrTMYE-4wijXiM5qGPqgzLyMe3tJk31P822SVQHSB6gnsDNMFY1HFC6jct5DAZBX9LNHvQZWf2uoKrmrlK8yk8hZaThJCp0qDIlyMQfOHtYNYrUthBaJ8sIw8ukT2CySDrl5JhoyviasrcEdAEykm46FUobP3vH1GxHjZ27FDcpqDQENJPaV5JQT3Y2ZiwBJf5Ma9ziRjEap3tqF4TVWLLsrnWO9rCSURM3Js9kHMlwux3vPwD0XkcOdzKozqNMqIewh-5uV7pok_IIjB1IMyA_rMbnfjoARFU846gbwu_yx9zuS5FOnJsvqmSAhVHWQ42clZPHkU-5WaDhmAwHpEA7wbxmBY4NkPhI0BbgMZf_ePsrUHd24x7xjPGQ8pDyzIhU6iqHR92o7TgpRvXGLvNFpWH7AkAY0AdCijFXkohIYYxLcrrsoSRMbmBqDS2Eu6xifHOfknefP23-JFEF2FsGDE5qvkvhfUjQJZ3Emnkl8d3Ku5JezJ_L0zEMhlN2ZQv9f2ZsC-iGPK3nGhuewjmk4NPzsL9qND-FS1jgT0EQTC5uKc2VcsWYVO8bgPNlvCyO6z2EHOZz449OYsZvkOsvGFWuAHZakCGhFAwDghXyVfdpOHT07BHT0I1DV0TDlAi4yTsL1px50yrXHG3y_TjcPTXXEZr5g2O-jW4BAWOQgDzfaq8C31Q1GhQmYIOraQzKXXp61VTmJ65g9ZIn225PtupMQzF8ir7bwblWBXs9tRMaATG6ZvOOhUtFqXvohbsYK-ozgwCYLDQWRaTm04gFtr8ffGX_9s1YNvDj6zAn8F3ysx310qiYbG5nY2SRFetrvlzDsJ1P0KC8iMkhXKnggEVGtQMR3E0ZMHYo-1MZjfQNtdLUxADjSmBsOC8ReEgDUSArRrpfkrU-XywyuZ2wKX58pqsJDuztQu4WIEQ4HXmAAcytDt0nnu3KtrLIOZMm0fHJAAM9AXWHwmkhwKQqPhd2P-QK1ApmrD42ofdprrHKyCQmmYbPO1UPs8Y6EkOz_Ct1iuj8X51-M2_dYrD993s_lT6_mcv_3Gj-yxOmRsf6D1I6kz3Z-4censHykUc448XgMTGk272cTBsi51n0bpGNeASHz37woDsbYuFdB0DCBfGzfYIqdgj7R7YK41LJ8ZlVHRkybutK52FLVRGbBXkp7AS1ud5NODnqxnSFl1jsGMVnOnhswvVVbXIkjRKOALhXIDNs3dHsDpvxkdSLGkceqNSpybOViZwH6CXecqodNAb922tkG6J4qScRuj0TA1cw11BGXBn6Z6i1jL5oDCkodpnpcBUTFItaUfS_jVbNFe_FS4RouAlxM-eRfd59P4v5uDd5edt6B1AvEMOtT4EcTEEhgS_w1PlDgC_F-mKLNwm8w5S6qZI59YfvtZLA=w1434-h734"
						/>
					</div>
					<div class={clsx("avatar__intro", styles["right"])}>
						<div class="avatar__name">placeholder</div>
						<small class="avatar__subtitle">placeholder</small>
					</div>
				</div>
				<div class="avatar">
					<div class={clsx(styles["left"])}>
						<img
							alt="placeholder"
							src="https://lh3.googleusercontent.com/fife/AMPSemeeHLQ4SYUfMO76eG0zznSc-GQg_xvj0Us8i7WINMfxpTCifO6E-xrficjcBtkYsCj6abBpUEGKHcDoBW7O2niK98WGUg-t3_lssj2yVZMBkwEUXkfptqVQNrTMYE-4wijXiM5qGPqgzLyMe3tJk31P822SVQHSB6gnsDNMFY1HFC6jct5DAZBX9LNHvQZWf2uoKrmrlK8yk8hZaThJCp0qDIlyMQfOHtYNYrUthBaJ8sIw8ukT2CySDrl5JhoyviasrcEdAEykm46FUobP3vH1GxHjZ27FDcpqDQENJPaV5JQT3Y2ZiwBJf5Ma9ziRjEap3tqF4TVWLLsrnWO9rCSURM3Js9kHMlwux3vPwD0XkcOdzKozqNMqIewh-5uV7pok_IIjB1IMyA_rMbnfjoARFU846gbwu_yx9zuS5FOnJsvqmSAhVHWQ42clZPHkU-5WaDhmAwHpEA7wbxmBY4NkPhI0BbgMZf_ePsrUHd24x7xjPGQ8pDyzIhU6iqHR92o7TgpRvXGLvNFpWH7AkAY0AdCijFXkohIYYxLcrrsoSRMbmBqDS2Eu6xifHOfknefP23-JFEF2FsGDE5qvkvhfUjQJZ3Emnkl8d3Ku5JezJ_L0zEMhlN2ZQv9f2ZsC-iGPK3nGhuewjmk4NPzsL9qND-FS1jgT0EQTC5uKc2VcsWYVO8bgPNlvCyO6z2EHOZz449OYsZvkOsvGFWuAHZakCGhFAwDghXyVfdpOHT07BHT0I1DV0TDlAi4yTsL1px50yrXHG3y_TjcPTXXEZr5g2O-jW4BAWOQgDzfaq8C31Q1GhQmYIOraQzKXXp61VTmJ65g9ZIn225PtupMQzF8ir7bwblWBXs9tRMaATG6ZvOOhUtFqXvohbsYK-ozgwCYLDQWRaTm04gFtr8ffGX_9s1YNvDj6zAn8F3ysx310qiYbG5nY2SRFetrvlzDsJ1P0KC8iMkhXKnggEVGtQMR3E0ZMHYo-1MZjfQNtdLUxADjSmBsOC8ReEgDUSArRrpfkrU-XywyuZ2wKX58pqsJDuztQu4WIEQ4HXmAAcytDt0nnu3KtrLIOZMm0fHJAAM9AXWHwmkhwKQqPhd2P-QK1ApmrD42ofdprrHKyCQmmYbPO1UPs8Y6EkOz_Ct1iuj8X51-M2_dYrD993s_lT6_mcv_3Gj-yxOmRsf6D1I6kz3Z-4censHykUc448XgMTGk272cTBsi51n0bpGNeASHz37woDsbYuFdB0DCBfGzfYIqdgj7R7YK41LJ8ZlVHRkybutK52FLVRGbBXkp7AS1ud5NODnqxnSFl1jsGMVnOnhswvVVbXIkjRKOALhXIDNs3dHsDpvxkdSLGkceqNSpybOViZwH6CXecqodNAb922tkG6J4qScRuj0TA1cw11BGXBn6Z6i1jL5oDCkodpnpcBUTFItaUfS_jVbNFe_FS4RouAlxM-eRfd59P4v5uDd5edt6B1AvEMOtT4EcTEEhgS_w1PlDgC_F-mKLNwm8w5S6qZI59YfvtZLA=w1434-h734"
						/>
					</div>
					<div class={clsx("avatar__intro", styles["right"])}>
						<div class="avatar__name">placeholder</div>
						<small class="avatar__subtitle">placeholder</small>
					</div>
				</div> */}
			</div>
		</Layout>
	);
}
