<template>
  <div class="contact_form-gen mx-3">
    <div id="contact-form" class="contact-form my-5">
      <h1 class="contact-form_title">{{$t('contact_title')}}</h1>
      <div class="separator"></div>

      <div v-if="isSending" class="loading">Sendig...</div>

<!-- class="form" @submit="onSubmit" -->
      <form action="https://formspree.io/stefan2907@gmail.com" method="POST" class="form"> 

        <input type="hidden" name="_next" value="/">
        <input
          required
          name="name"
          v-model="contact.name"
					:placeholder="$t('contact_name')"
          type="text"
          autocomplete="off"
        >
        <input
          required
          name="email"
          v-model="contact.email"
          :placeholder="$t('contact_email')"
          type="email"
          autocomplete="off"
        >
        <textarea name="message" v-model="contact.message" rows="4" :placeholder="$t('contact_message')"></textarea>
        <input  type="submit" class="button btn-default" :value="$t('contact_send')">
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Contact",
    data() {
        return {
            contact: {
                name: '',
                email: '',
                message: '',
						},
						get_name : 'Надіслати1',

            isSending: false
        };
    },
    methods: {


		clearForm() {
			for (let field in this.contact) {
				this.contact[field] = ''
			}
		},

		/**
		 * Handler for submit
		 */	
		onSubmit(evt) {
			evt.preventDefault();

			this.isSending = true;

			setTimeout(() => {
				// Build for data
				let form = new FormData();
				for (let field in this.contact) {
					form.append(field, this.contact[field]);
				}

				// Send form to server	
				this.$http.post('https://formspree.io/stefan2907@gmail.com', form).then(() => {
					this.clearForm();
					this.isSending = false;
				}).catch(() => {
		
				});

			}, 1000);
		}
	}

};
</script>

<style scoped>

.contact-form {
	font-family: 16px;
	margin: 0 auto;
	max-width: 600px;
	width: 100%;
}

.contact-form .separator {
	border-bottom: solid 1px #ccc;
	margin-bottom: 15px;
}

.contact-form .form {
	display: flex;
	flex-direction: column;
	font-size: 16px;
}

.contact-form_title {
	color: #333;
	text-align: left;
	font-size: 28px;
}

.contact-form input[type="email"],
.contact-form input[type="text"],
.contact-form textarea {
	border: solid 1px #e8e8e8;
	font-family: 'Roboto', sans-serif;
	padding: 10px 7px;
	margin-bottom: 15px;
	outline: none;
}

.contact-form textarea {
	resize: none;
}

.contact-form .button {
	background: #3a7286;
	border: solid 1px #1e6a84;
	color: white;
	cursor: pointer;
	padding: 10px 50px;
	text-align: center;
	text-transform: uppercase;
}

.contact-form .button:hover {
	background: #1d84a7;
	border: solid 1px #1e6a84;
}

.contact-form input[type="email"],
.contact-form input[type="text"],
.contact-form textarea,
.contact-form .button {
	font-size: 15px;
	border-radius: 3px
}

</style>