require 'test_helper'

class FavesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @fafe = faves(:one)
  end

  test "should get index" do
    get faves_url, as: :json
    assert_response :success
  end

  test "should create fafe" do
    assert_difference('Fave.count') do
      post faves_url, params: { fafe: { deck_id: @fafe.deck_id, user_id: @fafe.user_id } }, as: :json
    end

    assert_response 201
  end

  test "should show fafe" do
    get fafe_url(@fafe), as: :json
    assert_response :success
  end

  test "should update fafe" do
    patch fafe_url(@fafe), params: { fafe: { deck_id: @fafe.deck_id, user_id: @fafe.user_id } }, as: :json
    assert_response 200
  end

  test "should destroy fafe" do
    assert_difference('Fave.count', -1) do
      delete fafe_url(@fafe), as: :json
    end

    assert_response 204
  end
end
