class ApplicantsController < ApplicationController
  http_basic_authenticate_with :name => ENV["admin_name"], :password => ENV["admin_password"], :only => [:index]

  def index
    @applicants = Applicant.all
    @total = Applicant.count
  end

  def new
    @applicant = Applicant.new
  end

  def create
    @applicant = Applicant.new(applicant_params)

    respond_to do |format|
      if @applicant.save
        format.html { redirect_to root_path, notice: "Thanks for registering!" }
        format.js {}
        format.json { render json: @applicant, status: :created}
      else
        format.html { redirect_to root_path, notice: "Your message was not submitted correctly. Please try again." }
        format.js {render action: 'error', status: :unprocessable_entity}
        format.json { render json: @applicant.errors, status: :unprocessable_entity}
      end
    end
  end

  def destroy
    @applicant = Applicant.find params[:id]
    @applicant.destroy
    redirect_to applicants_path
  end

  private

  def applicant_params
    params.require(:applicant).permit(:name, :email, :age, :gender, :interest, :background, :newsletter)
  end
end
