import React from "react";
import { clients } from "../constant";
import styles from "../styles";

const Clients = () => (
	<section className={`${styles.flexCenter} my-4`}>
		<div className={`${styles.flexStart} flex flex-wrap w-full`}>
			{clients.map((client) => (
				<div
					className={`flex-1 ${styles.flexCenter} flex-wrap w-full min-w-[120px]`}
					key={client.id}>
					<img
						src={client.logo}
						alt="client"
						className="sm:w-[192px] w-[100px] object-contain"
					/>
				</div>
			))}
		</div>
	</section>
);

export default Clients;
