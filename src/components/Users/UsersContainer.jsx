import { connect } from "react-redux"
import { unfollow, follow, setCurrentPage, toggleFollowingProgress, getUsers } from "../../redux/UsersReducer"
import Users from './Users'
import React from "react"
import Preloader from "../Preloader/Preloader"
import { withAuthRedirect } from "../../HOC/withAuthRedirect"
import { compose } from "redux"


class UsersContainer extends React.Component {

    componentDidMount() {
        // this.props.toggleIsFetching(true) 
        // usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
        //     .then(data => {
        //         this.props.toggleIsFetching(false)
        //         this.props.setUsers(data.items)
        //         this.props.setTotalUsersCount(data.totalCount)
        //     })
        // подключаем санку
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber) => {
        // ещё санка чтобы компонента работала с BLL а не напрямую с сервером через DAL
        this.props.getUsers(pageNumber, this.props.pageSize)
        // this.props.toggleIsFetching(true)
        // this.props.setCurrentPage(pageNumber)
        // usersAPI.getUsers(pageNumber, this.props.pageSize)
        //     .then(data => {
        //         this.props.toggleIsFetching(false)
        //         this.props.setUsers(data.items)
        //     })
    }

    render() {

        return <>
            {this.props.isFetching ? <Preloader /> : null}
            <Users totalUsersCount={this.props.totalUsersCount} pageSize={this.props.pageSize} currentPage={this.props.currentPage}
                users={this.props.users} toggleFollowingProgress={this.props.toggleFollowingProgress} followingInProgress={this.props.followingInProgress}
                isFetching={this.props.isFetching}
                onPageChanged={this.onPageChanged} unfollow={this.props.unfollow} follow={this.props.follow} />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}

// лайфхак для MapDispatchToProps

// let mapDispatchToProps = (dispatch) => {
//     return {
//         follow: (userId) => {
//             dispatch(followAC(userId))
//         },
//         unfollow: (userId) => {
//             dispatch(unfollowAC(userId))
//         },
//         setUsers: (users) => {
//             dispatch(setUsersAC(users))
//         },
//         setCurrentPage: (pageNumber) => {
//             dispatch(setCurrentPageAC(pageNumber))
//         },
//         setTotalUsersCount: (totalCount) => {
//             dispatch(setTotalUsersCountAC(totalCount))
//         },
//         toggleIsFetching: (isFetching) => {
//             dispatch(toggleIsFetchingAC(isFetching))
//         }
//     }
// }
// export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)
export default compose(
    connect(mapStateToProps, {
        follow, unfollow, setCurrentPage, toggleFollowingProgress, getUsers
    }),
    withAuthRedirect
)(UsersContainer)