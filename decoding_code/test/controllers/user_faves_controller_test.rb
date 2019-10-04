require 'test_helper'

class UserFavesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @user_fafe = user_faves(:one)
  end

  test "should get index" do
    get user_faves_url, as: :json
    assert_response :success
  end

  test "should create user_fafe" do
    assert_difference('UserFafe.count') do
      post user_faves_url, params: { user_fafe: { deck_id: @user_fafe.deck_id, user_id: @user_fafe.user_id } }, as: :json
    end

    assert_response 201
  end

  test "should show user_fafe" do
    get user_fafe_url(@user_fafe), as: :json
    assert_response :success
  end

  test "should update user_fafe" do
    patch user_fafe_url(@user_fafe), params: { user_fafe: { deck_id: @user_fafe.deck_id, user_id: @user_fafe.user_id } }, as: :json
    assert_response 200
  end

  test "should destroy user_fafe" do
    assert_difference('UserFafe.count', -1) do
      delete user_fafe_url(@user_fafe), as: :json
    end

    assert_response 204
  end
end
