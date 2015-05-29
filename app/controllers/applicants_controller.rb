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

    if @applicant.save
      ApplicantsMailer.registration_form(@applicant).deliver_now
      flash[:success] = "Thanks for applying for HackFest! We will send you an email to confirm your participation."
      redirect_to root_path
    else
      flash[:error] = "Your message was not submitted correctly. Please try again."
      redirect_to '/#applicant-form'
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
