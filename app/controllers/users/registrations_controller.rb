class Users::RegistrationsController < Devise::RegistrationsController 
	respond_to :json

	def create
	  build_resource(sign_up_params)
	  if resource.save
	    sign_in resource
	    render status: 200,
	    json: {
	    	success: true,
	    	info: 'Registered',
	    	data: {
	    		user: resource,
	    		auth_token: current_user.authentication_token
	    	}
	    }
	  else 
	  	render status: :unprocessable_identity,
	  	json: {
	  		success: false,
	  		info: resource.errors,
	  		data: {}
	  	}
	  end  
	end
end