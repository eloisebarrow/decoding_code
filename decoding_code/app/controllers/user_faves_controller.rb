class UserFavesController < ApplicationController
  before_action :set_user_fafe, only: [:show, :update, :destroy]

  # GET /user_faves
  def index
    @user_faves = UserFafe.all

    render json: @user_faves
  end

  # GET /user_faves/1
  def show
    render json: @user_fafe
  end

  # POST /user_faves
  def create
    @user_fafe = UserFafe.new(user_fafe_params)

    if @user_fafe.save
      render json: @user_fafe, status: :created, location: @user_fafe
    else
      render json: @user_fafe.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /user_faves/1
  def update
    if @user_fafe.update(user_fafe_params)
      render json: @user_fafe
    else
      render json: @user_fafe.errors, status: :unprocessable_entity
    end
  end

  # DELETE /user_faves/1
  def destroy
    @user_fafe.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_user_fafe
      @user_fafe = UserFafe.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def user_fafe_params
      params.require(:user_fafe).permit(:user_id, :deck_id)
    end
end
